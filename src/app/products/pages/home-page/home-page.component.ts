import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/products.interface';
import {  productsData} from '../../data/products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    const existingProducts = this.productService.getProducts();
    if (existingProducts.length === 0) {
      this.productService.loadInitialProducts(productsData as Product[]);
    }
  }
}
