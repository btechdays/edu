import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanysListComponent } from './companys-list/companys-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{ path: '',
component: LayoutComponent ,
children: [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'companys',
    component: CompanysListComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'user/module'
  // },
  // {
  //   path: 'vendor',
  //   component: ViewVendorComponent
  // },
  // {
  //   path: 'my/subscription',
  //   component: MySubscriptionComponent
  // },
  // {
  //   path: 'expired/subscription',
  //   component: ExpiredSubscriptionComponent
  // }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
