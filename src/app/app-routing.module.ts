import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';




const routes: Routes = [
  { path: '', redirectTo: '/add-customer', pathMatch: 'full' },
  { path: 'add-customer', component: CreateCustomerComponent },
  { path: 'edit-customer/:id', component: CustomerDetailsComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'search-customer', component: SearchCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
