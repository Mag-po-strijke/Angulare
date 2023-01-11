import { IProduct } from './../../models/product';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'productList',
    templateUrl: './productList.component.html',
    styleUrls: ['./productList.component.scss']
})
export class ProductList {
    @Input()
    products: IProduct[] = [];
}