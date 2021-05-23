import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  company;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCompanyProfile();
  }


  getCompanyProfile() {
    this.authService.getLoggedInUser().subscribe((res: any) => {
      this.company = res.user;
    }, (error) => {
      this.toastr.error(error);
    });
  }

}
