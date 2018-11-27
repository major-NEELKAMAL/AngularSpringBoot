import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  addCustomer(customer: Customer): Observable<any> {
    console.log('hi');
    return this.http.post(this.url + 'add-customer', customer, httpOptions)
    .pipe(tap(value => this.log(value)), catchError(this.handleError()));
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.url + 'update-customer', customer, httpOptions)
    .pipe(tap(value => this.log(value)), catchError(this.handleError()));
  }

  getCustomerById(id: Number): Observable<Customer> {
    return this.http.get<Customer>(this.url + 'edit-customer' + `/${id}`);
  }

  deleteCustomer(id: Number): Observable<any> {
    return this.http.delete(this.url + 'delete-customer' + `/${id}`, httpOptions)
    .pipe(tap(value => this.log(value)), catchError(this.handleError()));
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url + 'customer-list');
  }

  searchByAddress(searchAddress: string): Observable<Customer[]> {
    console.log(searchAddress);
    console.log(searchAddress.trim());
    if (!searchAddress.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Customer[]>(this.url + 'search-customer?address=' + `${searchAddress}`);
  }

  handleError(): any {
    console.log('error');
  }

   private log(responseData: any ) {
     console.log(responseData.message);
     this.messageService.addMessage(responseData.message);
  }
}
