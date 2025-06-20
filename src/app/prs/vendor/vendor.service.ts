import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = 'http://localhost:5000/api/vendors';

  constructor(
    public http: HttpClient,
  ) { }

    list(): Observable<Vendor[]> {
      return this.http.get<Vendor[]>(`${this.baseUrl}`) as Observable<Vendor[]>;
    }
    get(id: number): Observable<Vendor> {
      return this.http.get<Vendor>(`${this.baseUrl}/${id}`) as Observable<Vendor>;
    }
    create(vendor: Vendor): Observable<Vendor> {
      return this.http.post<Vendor>(`${this.baseUrl}`, vendor) as Observable<Vendor>;
    }
    change(vendor: Vendor): Observable<any> {
      return this.http.put<Vendor>(`${this.baseUrl}/${vendor.id}`, vendor) as Observable<any>;
    }
    remove(id: number): Observable<any> {
      return this.http.delete<Vendor>(`${this.baseUrl}/${id}`) as Observable<any>;
    }
}
