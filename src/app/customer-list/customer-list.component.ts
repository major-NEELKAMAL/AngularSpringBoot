import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
   this.customerService.getAllCustomer()
    .subscribe(customers =>  this.customers = customers);
  }

  deleteCustomer(customer: Customer): void {
    this.customerService.deleteCustomer(customer.id)
    .subscribe();
    this.getAll();
  }

}
