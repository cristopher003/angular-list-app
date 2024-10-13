import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private storageKey = 'products';

  constructor() {}


  getProducts(): Product[] {
    const products = localStorage.getItem(this.storageKey);
    return products ? JSON.parse(products) : [];
  }


  getProductById(id: number): Product | undefined {
    const products = this.getProducts();
    return products.find(product => product.id === id);
  }


  addProduct(product: Product): void {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }


  clearProducts(): void {
    localStorage.removeItem(this.storageKey);
  }

 
  loadInitialProducts(products: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }
}
