import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customer = new Customer();
  constructor(private customerService: CustomerService ) {  }

  ngOnInit() {
    console.log('hello');
  }


  onSubmit() {
    console.log(this.customer);
    this.customerService.addCustomer(this.customer)
      .subscribe();
  }
}
