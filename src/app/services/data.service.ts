import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
