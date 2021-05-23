import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css']
})
export class MyHistoryComponent implements OnInit {

  deals = [];

  constructor(
    private farmerService: FarmerService
  ) { }

  ngOnInit(): void {
    this.getDeals();
  }

  getDeals() {
    this.farmerService.getDeals().subscribe((res: any) => { 
      this.deals = res;
    })
  }

  onDropDownChange(value) {
    value == 'Completed' ? this.getCompletedList() : this.getPendingList();
  }

  getCompletedList() { }

  getPendingList() { }

}
