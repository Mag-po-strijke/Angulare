import { IProduct } from './models/product';
import { products } from './data/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App {
  products: IProduct[] = products
}
