import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-farmer-profile-edit',
  templateUrl: './farmer-profile-edit.component.html',
  styleUrls: ['./farmer-profile-edit.component.css']
})
export class FarmerProfileEditComponent implements OnInit {

  profileForm: FormGroup;
  materials = [];
  selectedMaterials = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private farmerService: FarmerService,
    private router: Router,
    private toastr: ToastrService,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getMaterial();
    this.getFarmer();;
  }

  getMaterial() {
    this.authService.getMaterial().subscribe((res: any) => {
      this.materials = res;
    }, (error) => { });
  }

  onMaterialSelect() {
    const value = this.profileForm.get('material').value;
    this.selectedMaterials.includes(value) ? null : this.selectedMaterials.push(value);
    this.profileForm.get('material').setValue({ name: 'select material' });
  }

  getFarmer() {
    this.authService.getLoggedInUser().subscribe((res) => {
      this.setForm(res);
    }, () => { });
  }

  buildForm() {
    this.profileForm = this.fb.group({
      profile: [null],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
      city: [null, [Validators.required]],
      landArea: [null, [Validators.required]],
      material: [{ name: 'select material' }, [Validators.required]],
    });
  }

  setForm(farmer) {
    this.profileForm.get('profile').setValue(farmer.user.profile);
    this.profileForm.get('name').setValue(farmer.user.name);
    this.profileForm.get('phone').setValue(farmer.user.phone);
    this.profileForm.get('address').setValue(farmer.user.address);
    this.profileForm.get('city').setValue(farmer.user.city);
    this.profileForm.get('landArea').setValue(farmer.landArea);
    this.selectedMaterials = farmer.material;
  }

  edit() {
    this.farmerService.updateFarmer(this.getBody()).subscribe((res: any) => {
      this.router.navigate(['../profile'], { relativeTo: this.active })
    }, () => {
      this.toastr.error('Error while updating profile')
    });
  }

  getBody() {
    const body = {
      user: {
        profile: this.profileForm.get('profile').value,
        name: this.profileForm.get('name').value,
        phone: this.profileForm.get('phone').value,
        address: this.profileForm.get('address').value,
        city: this.profileForm.get('city').value,
      },
      farmer: {
        landArea: this.profileForm.get('landArea').value,
        material: this.selectedMaterials.map(o => o._id)
      }
    }
    return body;
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.profileForm.patchValue({
          profile: reader.result
        });
      } 
    }
  }

}
