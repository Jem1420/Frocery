import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url ="http://localhost/frocery-api/";

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<Product[]>{
  //   return this.http.get<Product[]>(this.url);
  // }
  getProducts(endpoint, data):Observable<Product[]>{
    return this.http.post<Product[]>(this.url + endpoint,JSON.stringify(data));
  }


}
