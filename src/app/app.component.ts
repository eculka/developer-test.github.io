import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { CustomersComponent } from './customers/customers/customers.component';
import { CustomersService } from './customers/customers.service';
import { Customers } from './customers/customers/customers';
import { Customer } from './customers/customers/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild(CustomersComponent, {static: false}) customersComponent: CustomersComponent;
  customers = Customers;
  addNewCustomerForm;

  modalRef: BsModalRef;
  constructor(
    public customerService: CustomersService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {
    this.addNewCustomerForm = this.formBuilder.group({
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
      age: '',
      city: ''
    });
  }

  ngOnInit() {
    // Getting customers from customer service
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers();
  }

  addCustomer(customer) {
    this.customerService.addCustomer(customer);
    this.addNewCustomerForm.reset();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
