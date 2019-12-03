import { Component, OnInit, Input } from '@angular/core';
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { Customer } from './customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @Input() customers: Customer[];

  sortDirection = 'asc'; // Low to high
  sortIcon = faSortDown;
  sortBackground = faSort;
  sortProperty = 'name';

  constructor(public customerService:CustomersService) { }

  ngOnInit() {
    // Initial sorting in customer service
    this.customerService.sortDataByProperty(this.sortProperty, this.sortDirection);
  }

  public sort(sortProperty): void {
    this.sortDirection = (this.sortProperty === sortProperty && this.sortDirection === 'asc') ? 'desc' : 'asc';
    this.sortIcon = this.sortDirection === 'asc' ? faSortDown : faSortUp;
    this.sortProperty = sortProperty;

    // Sort customer data in customer service
    this.customerService.sortDataByProperty(this.sortProperty, this.sortDirection);
  }
}
