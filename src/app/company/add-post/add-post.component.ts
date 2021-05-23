import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  newPostForm: FormGroup;
  materials = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private companyService: CompanyService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getMaterial();
  }

  getMaterial() {
    this.authService.getMaterial().subscribe((res: any) => {
      this.materials = res;
    }, (error) => {

    });
  }

  buildForm() {
    this.newPostForm = this.fb.group({
      cost: [0, [Validators.required]],
      material: ['', [Validators.required]],
      expiryDate: [new Date(), [Validators.required]],
    });
  }

  addPost() {
    this.companyService.createPost(this.newPostForm.value).subscribe((res) => {
      this.cancel();
    })
  }

  cancel() {
    this.router.navigate(['../history'], { relativeTo: this.active })
  }

}
