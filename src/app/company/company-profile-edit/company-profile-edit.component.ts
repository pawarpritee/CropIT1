import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-profile-edit',
  templateUrl: './company-profile-edit.component.html',
  styleUrls: ['./company-profile-edit.component.css']
})
export class CompanyProfileEditComponent implements OnInit {

  profileForm: FormGroup;
  materials = [];
  selectedMaterials = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private companyService: CompanyService,
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
    }, (error) => {

    });
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
      domain: [null, [Validators.required]],
      material: [{ name: 'select material' }, [Validators.required]],
    })
  }

  setForm(company) {
    this.profileForm.get('profile').setValue(company.user.profile);
    this.profileForm.get('name').setValue(company.user.name);
    this.profileForm.get('phone').setValue(company.user.phone);
    this.profileForm.get('address').setValue(company.user.address);
    this.profileForm.get('city').setValue(company.user.city);
    this.profileForm.get('domain').setValue(company.domain);
    this.selectedMaterials = company.material;
  }

  edit() {
    this.companyService.updateCompany(this.getBody()).subscribe((res: any) => {
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
      company: {
        domain: this.profileForm.get('domain').value,
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
