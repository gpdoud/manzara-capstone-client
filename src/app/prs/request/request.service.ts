import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = 'http://localhost:5000/api/requests';

  constructor(
    public http: HttpClient,
  ) { }

    list(): Observable<Request[]> {
      return this.http.get<Request[]>(`${this.baseUrl}`) as Observable<Request[]>;
    }
    get(id: number): Observable<Request> {
      return this.http.get<Request>(`${this.baseUrl}/${id}`) as Observable<Request>;
    }
    // Returns all request with status 'REVIEW'
    // but not requests made by the user
    reviews(userId: number): Observable<Request[]> {
      return this.http.get<Request>(`${this.baseUrl}/reviews/${userId}`) as unknown as Observable<Request[]>;
    }
    create(request: Request): Observable<Request> {
      return this.http.post<Request>(`${this.baseUrl}`, request) as Observable<Request>;
    }
    change(request: Request): Observable<any> {
      return this.http.put<Request>(`${this.baseUrl}/${request.id}`, request) as Observable<any>;
    }
    review(request: Request): Observable<any> {
      return this.http.put<Request>(`${this.baseUrl}/review/${request.id}`, request) as Observable<any>;
    }
    approve(request: Request): Observable<any> {
      return this.http.put<Request>(`${this.baseUrl}/approve/${request.id}`, request) as Observable<any>;
    }
    reject(request: Request): Observable<any> {
      return this.http.put<Request>(`${this.baseUrl}/reject/${request.id}`, request) as Observable<any>;
    }
    remove(id: number): Observable<any> {
      return this.http.delete<Request>(`${this.baseUrl}/${id}`) as Observable<any>;
    }
}
