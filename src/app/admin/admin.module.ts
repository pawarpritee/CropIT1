import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';


@NgModule({
  declarations: [AdminComponent, HomeComponent, CompanyListComponent, FarmerListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
