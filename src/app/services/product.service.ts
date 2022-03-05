import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_SERVER = 'http://localhost:8085/tareaweb/api/product'

  constructor(
    private httpClient: HttpClient
  ) { }

  public createProduct(product: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "/create", product);
  }

  public getAllProducts(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/get/all");
  }

}
