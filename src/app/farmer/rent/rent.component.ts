import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  machines = [];
  date: Date[] = [];

  constructor(
    private farmerService: FarmerService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getMachines();
  }

  getMachines() {
    this.farmerService.getMachines().subscribe((res: any) => {
      this.machines = res;
    })
  }

  onChange(result: Date[]): void {

  }

  getOnRent(machine) {
    const data = {
      renter: machine.renter.user._id,
      farmer: localStorage.getItem('userId'),
      machine: machine._id,
      fromDate: this.date[0].toISOString().slice(0,10),
      toDate: this.date[1].toISOString().slice(0,10)
    };
    this.farmerService.getOnRent(data).subscribe((res: any) => {
      this.toastrService.success('Machine added on rent')
    }, (error) => {
      this.toastrService.error('Something went wrong');
    });
  }

}
