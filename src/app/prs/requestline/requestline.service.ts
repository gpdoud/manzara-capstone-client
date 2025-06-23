import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  private baseUrl = 'http://localhost:5000/api/requestlines';

  constructor(
    public http: HttpClient,
  ) { }

    get(id: number): Observable<Requestline> {
      return this.http.get<Requestline>(`${this.baseUrl}/${id}`) as Observable<Requestline>;
    }
    create(requestline: Requestline): Observable<Requestline> {
      return this.http.post<Requestline>(`${this.baseUrl}`, requestline) as Observable<Requestline>;
    }
    change(requestline: Requestline): Observable<any> {
      return this.http.put<Requestline>(`${this.baseUrl}/${requestline.id}`, requestline) as Observable<any>;
    }
    remove(id: number): Observable<any> {
      return this.http.delete<Requestline>(`${this.baseUrl}/${id}`) as Observable<any>;
    }

}
