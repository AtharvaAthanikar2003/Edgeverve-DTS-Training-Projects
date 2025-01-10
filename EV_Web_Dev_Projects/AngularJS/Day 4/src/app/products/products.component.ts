// products.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productArr = [
    { id: 100, name: 'Mobile', price: 10000, quantity: 1 },
    { id: 101, name: 'Bag', price: 500, quantity: 1 },
    { id: 102, name: 'Shoe', price: 1000, quantity: 1 },
    { id: 103, name: 'Groceries', price: 700, quantity: 1 },
    { id: 104, name: 'Furniture', price: 15000, quantity: 1 },
    { id: 105, name: 'Laptop', price: 35000, quantity: 1 }
  ];

  totalPrice: number = this.calculateTotalPrice();
  errorMessage: string = '';
  discountMessage: string = '';

  calculateTotalPrice(): number {
    return this.productArr.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }

  onQuantityChange(product: any): void {
    if (!product.quantity) {
      this.errorMessage = 'Please enter a quantity';
      return;
    } else {
      this.errorMessage = '';
    }
    this.totalPrice = this.calculateTotalPrice();

    if (this.totalPrice > 100000) {
      this.discountMessage = 'You are eligible for discount!';
    } else {
      this.discountMessage = '';
    }
  }

  deleteProduct(productId: number): void {
    this.productArr = this.productArr.filter(product => product.id !== productId);
    this.totalPrice = this.calculateTotalPrice();

    if (this.totalPrice > 100000) {
      this.discountMessage = 'You are eligible for discount!';
    } else {
      this.discountMessage = '';
    }
  }
}
