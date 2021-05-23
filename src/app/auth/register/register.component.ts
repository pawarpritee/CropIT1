import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  userType = 'male';
  materials = [];
  selectedMaterials = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getMaterial();
  }

  buildForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      adhaar: ['', Validators.required],
      userType: ['farmer', Validators.required],
      material: [{ name: 'select material' }, Validators.required],
      landAreaOrDomain: ['', Validators.required]
    })
  }

  getMaterial() {
    this.authService.getMaterial().subscribe((res: any) => {
      this.materials = res;
    }, (error) => {

    });
  }

  onMaterialSelect() {
    const value = this.registerForm.get('material').value;
    this.selectedMaterials.includes(value) ? null : this.selectedMaterials.push(value);
    this.registerForm.get('material').setValue({ name: 'select material' });
  }

  register() {
    this.authService.signUp(this.getBody()).subscribe((res: any) => {
      this.toastrService.success('Register Successful');
      this.router.navigate(['/']);
    }, (error) => {
      if (error.status != 200) {
        this.toastrService.error(error.error)
      }
    });
  }

  getBody() {
    const newObj = {};
    const newField = this.registerForm.get('userType').value == 'farmer' ? 'landArea' : 'domain';
    newObj[newField] = this.registerForm.get('landAreaOrDomain').value;
    newObj['material'] = this.selectedMaterials.map(o => o._id);

    const body = {
      user: {
        name: this.registerForm.get('name').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value,
        phone: this.registerForm.get('phone').value,
        address: this.registerForm.get('address').value,
        city: this.registerForm.get('city').value,
        adhaar: this.registerForm.get('adhaar').value,
      }
    }

    body[this.registerForm.value.userType] = newObj;

    return body;
  }

}
