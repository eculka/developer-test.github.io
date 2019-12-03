import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CustomersComponent } from './customers/customers/customers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(CustomersComponent, {static: false}) customersComponent: CustomersComponent;

  faPlus = faPlus;

  customers = [
    {
      name: 'John',
      surname: 'Smith',
      email: 'johnsmith@email.com',
      phoneNumber: '07700 900193',
      age: '34',
      city: 'Riga'
    },
    {
      name: 'Anthony',
      surname: 'Blake',
      email: 'a.blake@email.com',
      phoneNumber: '07700 900276',
      age: '53',
      city: 'London'
    },
    {
      name: 'Bill',
      surname: 'Stevenson',
      email: 'bill.stevenson@email.com',
      phoneNumber: '07700 900025',
      age: '21',
      city: 'Barcelona'
    }
  ];

  addNewCustomerForm;

  modalRef: BsModalRef;
  constructor(
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addNewCustomer(customer) {
    this.customers.push(customer);
    // Clear form
    this.addNewCustomerForm.reset();
    // Hide Modal
    this.modalRef.hide();
    // Reset sorting in customers component
    this.customersComponent.sortDataByProperty(this.customersComponent.customers,
      this.customersComponent.sortProperty, this.customersComponent.sortDirection);
  }
}
