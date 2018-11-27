import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer = new Customer();
  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getCustomerById();
  }

  getCustomerById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id)
      .subscribe(customer => this.customer = customer);
    }

    onSubmit() {
    console.log(this.customer);
    this.customerService.updateCustomer(this.customer)
      .subscribe();
  }

}
