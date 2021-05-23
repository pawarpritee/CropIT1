import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmerProfileEditComponent } from './farmer-profile-edit/farmer-profile-edit.component';
import { FarmerComponent } from './farmer.component';
import { HomeComponent } from './home/home.component';
import { MyRentedComponent } from './my-rented/my-rented.component';
import { PaymentsComponent } from './payments/payments.component';
import { MyHistoryComponent } from './my-history/my-history.component';
import { ProfileComponent } from './profile/profile.component';
import { RentComponent } from './rent/rent.component';
import { ToolsComponent } from './tools/tools.component';


const routes: Routes = [
  {
    path: '', component: FarmerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'history', component: MyHistoryComponent },
      { path: 'tools', component: ToolsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'edit', component: FarmerProfileEditComponent },
      { path: 'rent', component: RentComponent },
      { path: 'my-rented', component: MyRentedComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
