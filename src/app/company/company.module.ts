import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyProfileEditComponent } from './company-profile-edit/company-profile-edit.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { MyHistoryComponent } from './my-history/my-history.component';
import { OrdersComponent } from './orders/orders.component';
import { TransportComponent } from './transport/transport.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyProfileComponent,
    CompanyProfileEditComponent,
    CompanyDashboardComponent,
    MyHistoryComponent,
    OrdersComponent,
    TransportComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
