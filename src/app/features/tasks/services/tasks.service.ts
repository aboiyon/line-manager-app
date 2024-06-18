import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  add(data: Task): Observable<any> {
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
  deleteAll(): Observable<Task[]> {
    return this.http.delete<Task[]>(this.apiUrl);
  }
  findByName(name: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?name=${name}`);
  }
}
