import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MyHistoryComponent } from './my-history/my-history.component';
import { RentComponent } from './rent/rent.component';
import { ToolsComponent } from './tools/tools.component';
import { PaymentsComponent } from './payments/payments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyRentedComponent } from './my-rented/my-rented.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FarmerProfileEditComponent } from './farmer-profile-edit/farmer-profile-edit.component';

@NgModule({
  declarations: [
    FarmerComponent,
    HomeComponent,
    ProfileComponent,
    MyHistoryComponent,
    RentComponent,
    ToolsComponent,
    PaymentsComponent,
    EditProfileComponent,
    MyRentedComponent,
    FarmerProfileEditComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NzDatePickerModule
  ]
})
export class FarmerModule { }
