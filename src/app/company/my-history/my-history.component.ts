import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css']
})
export class MyHistoryComponent implements OnInit {

  expiredPosts = [];

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.companyService.getExpiredPosts().subscribe((res: any) => {
      this.expiredPosts = this.getExpiredPosts(res);
    });
  }

  getExpiredPosts(posts: []) {
    return posts.filter((o: any) => {
      if (new Date(o.expiryDate) < new Date()) {
        return o;
      }
    });
  }

}
