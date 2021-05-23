import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  posts = [];

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.companyService.getPosts().subscribe((res: any) => {
      this.posts = res;
    });
  }

}
