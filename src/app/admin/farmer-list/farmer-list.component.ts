import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-farmer-list',
  templateUrl: './farmer-list.component.html',
  styleUrls: ['./farmer-list.component.css']
})
export class FarmerListComponent implements OnInit {

  farmers = [];

  constructor(
    private farmerService: FarmerService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getFarmers();
  }

  getFarmers() {
    this.farmerService.getFarmers().subscribe((res: any) => {

    }, (error) => {
      this.toastrService.error(error.error, 'Error while getting farmers',)
    });
  }

}
