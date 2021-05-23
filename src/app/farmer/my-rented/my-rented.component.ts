import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-my-rented',
  templateUrl: './my-rented.component.html',
  styleUrls: ['./my-rented.component.css']
})
export class MyRentedComponent implements OnInit {

  machines = [];

  constructor(
    private farmerService: FarmerService
  ) { }

  ngOnInit(): void {
    this.getMachines();
  }

  getMachines() {
    this.farmerService.getMyRentedMachines().subscribe((res: any) => {
      this.machines = res;
    })
  }

  onDropDownChange(value) {
    value == 'Paid' ? this.getPaidList() : this.getUnPaidList();
  }

  getPaidList() { }

  getUnPaidList() { }
}
