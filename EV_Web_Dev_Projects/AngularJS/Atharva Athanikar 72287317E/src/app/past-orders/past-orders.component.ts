import { Component } from '@angular/core';
@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent {
  orders = [
    { orderId: 2001, productName: 'iPhone 11 Pro', quantity: 1, billAmount: 1850, transaction: 'Completed' },
    { orderId: 2002, productName: 'iPhone 10', quantity: 1, billAmount: 990, transaction: 'Pending' },
    { orderId: 2003, productName: 'Samsung Galaxy S10', quantity: 2, billAmount: 1980, transaction: 'Completed' },
    { orderId: 2004, productName: 'Motorola Edge+', quantity: 1, billAmount: 980, transaction: 'Pending' }
  ];
}