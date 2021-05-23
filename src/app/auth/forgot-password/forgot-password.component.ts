import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private toastr: ToastrService, private router: Router) {

    this.forgotPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  forgotPassword() {

    if (this.forgotPasswordForm.value.password == this.forgotPasswordForm.value.confirmPassword) {
      this.http.post('http://localhost:3000/api/forgotPassword', this.forgotPasswordForm.value)
        .subscribe((result: any) => {
          this.toastr.success(result.message);
          this.router.navigate(['']);
        }, (err: any) => {
          this.toastr.error(err.error);
        }
        )
    }else{
      this.toastr.error('Passwords do not match');
    }
  }
}

