import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url ="http://localhost/frocery-api/";

  constructor(private http: HttpClient) {
    console.log("data service working");
   }

  postData(endpoint, data){
    return this.http.post(this.url + endpoint,JSON.stringify(data));
  }

  getProducts(endpoint, data):Observable<Product[]>{
    return this.http.post<Product[]>(this.url + endpoint,JSON.stringify(data));
  }
}
