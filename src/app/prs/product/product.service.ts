import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:5000/api/products';

  constructor(
    public http: HttpClient,
  ) { }

    list(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.baseUrl}`) as Observable<Product[]>;
    }
    get(id: number): Observable<Product> {
      return this.http.get<Product>(`${this.baseUrl}/${id}`) as Observable<Product>;
    }
    create(product: Product): Observable<Product> {
      return this.http.post<Product>(`${this.baseUrl}`, product) as Observable<Product>;
    }
    change(product: Product): Observable<any> {
      return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product) as Observable<any>;
    }
    remove(id: number): Observable<any> {
      return this.http.delete<Product>(`${this.baseUrl}/${id}`) as Observable<any>;
    }
}
