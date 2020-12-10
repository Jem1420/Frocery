import { Injectable } from '@angular/core';
import { Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Prod1', 'This is the ProdDescription', 100, 1),
    new Product(2, 'Prod2', 'This is the ProdDescription', 200, 1),
    new Product(3, 'Prod3', 'This is the ProdDescription', 300, 1),
    new Product(4, 'Prod4', 'This is the ProdDescription', 400, 1),
    new Product(5, 'Prod5', 'This is the ProdDescription', 500, 1),
    new Product(6, 'Prod6', 'This is the ProdDescription', 600, 1)
    // {id: 1, name: 'Meat', description: 'Approx. 1 kg'},
    // {id: 2, name: 'Fish', description: 'Approx. 1 kg'},
    // {id: 3, name: 'Pork', description: 'Approx. 1 kg'},
    // {id: 4, name: 'Bacon', description: 'Approx. 1 kg'},
    // {id: 5, name: 'Chicken', description: 'Approx. 1 kg'},
  ]
  constructor() { }

  getProducts(): Product[]{
    //TODO: Populates products from an API and return Observable
    return this.products
  }
}
