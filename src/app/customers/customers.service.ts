import { Injectable } from '@angular/core';

import { Customer } from './customers/customer';
import { Customers } from './customers/customers';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {

  customers = Customers;

  // Getting customers
  getCustomers() {
    return this.customers;
  }

  // Adding customers and sorting data
  addCustomer(customer) {
    this.customers.unshift(customer);
  }

  // Sort customer data function
  sortDataByProperty(sortProperty, sortDirection) {
    this.customers.sort((a, b) => (
      (a[sortProperty].toLowerCase() < b[sortProperty].toLowerCase()) ?
        (sortDirection === 'asc' ? -1 : 1) : ((a[sortProperty].toLowerCase() > b[sortProperty].toLowerCase()) ? (sortDirection === 'asc' ? 1 : -1) : 0))
    );
  }

  constructor() { }
}