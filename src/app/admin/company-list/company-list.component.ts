import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((res: any) => {

    }, (error) => {
      this.toastrService.error(error.error, 'Error while getting companies')
    })
  }

}
