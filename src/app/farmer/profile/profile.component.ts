import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  farmer;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getFarmerProfile();
  }


  getFarmerProfile() {
    this.authService.getLoggedInUser().subscribe((res: any) => {
      this.farmer = res.user;
    }, (error) => {
      this.toastr.error(error);
    });
  }

}
