import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyProfileEditComponent } from './company-profile-edit/company-profile-edit.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyComponent } from './company.component';
import { OrdersComponent } from './orders/orders.component';
import { MyHistoryComponent } from './my-history/my-history.component';
import { TransportComponent } from './transport/transport.component';


const routes: Routes = [
  {
    path: '', component: CompanyComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: CompanyDashboardComponent },
      { path: 'profile', component: CompanyProfileComponent },
      { path: 'edit', component: CompanyProfileEditComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'history', component: MyHistoryComponent },
      { path: 'transport', component: TransportComponent },
      { path: 'add-post', component: AddPostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
