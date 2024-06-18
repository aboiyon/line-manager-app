import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  add(data: User): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }
  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  edit(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  deleteAll(): Observable<User[]> {
    return this.http.delete<User[]>(this.apiUrl);
  }
}
