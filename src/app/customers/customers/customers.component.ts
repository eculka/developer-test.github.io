import { Component, OnInit, Input } from '@angular/core';
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @Input() customers: any[];

  sortDirection = 'asc'; // Low to high
  sortIcon = faSortDown;
  sortBackground = faSort;
  sortProperty = 'name';

  constructor() { }

  ngOnInit() {
    // Initial sorting
    this.sortDataByProperty(this.customers, this.sortProperty, this.sortDirection);
  }

  private sort(sortProperty) {
    this.sortDirection = (this.sortProperty === sortProperty && this.sortDirection === 'asc') ? 'desc' : 'asc';
    this.sortIcon = this.sortDirection === 'asc' ? faSortDown : faSortUp;
    this.sortProperty = sortProperty;
    // Sort customer data
    this.sortDataByProperty(this.customers, this.sortProperty, this.sortDirection);
    console.log('sorting', this.sortDirection, this.sortProperty);
  }

  // Sort customer data function
  sortDataByProperty(data, sortProperty, sortDirection) {
    return data.sort((a, b) => (
      (a[sortProperty].toLowerCase() < b[sortProperty].toLowerCase()) ?
        (this.sortDirection === 'asc' ? -1 : 1) : ((a[sortProperty] > b[sortProperty]) ? (this.sortDirection === 'asc' ? 1 : -1) : 0))
    );
  }

}
