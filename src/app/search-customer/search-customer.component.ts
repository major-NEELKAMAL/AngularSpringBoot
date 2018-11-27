import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Subject, Observable } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap, defaultIfEmpty
 } from 'rxjs/operators';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit {

  searchAddressTerm = new Subject<string>();

  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) { }

  searchAddress(term: string) {
    console.log(term);
    this.searchAddressTerm.next(term);
  }

  ngOnInit(): void {
      this.customers$ = this.searchAddressTerm.pipe(
                                                      debounceTime(300),
                                                      distinctUntilChanged(),
                                                      switchMap((term: string) => this.customerService.searchByAddress(term))
                                                      );
  }
}

