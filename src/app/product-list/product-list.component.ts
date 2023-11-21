import { Component } from '@angular/core';
import { ProductService } from '.@angular/product..service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: any[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
