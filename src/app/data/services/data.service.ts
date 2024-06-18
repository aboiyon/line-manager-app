import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  getComments(postId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${postId}/comments`);
  }

  getAlbums(): Observable<any> {
    return this.http.get(`${this.apiUrl}/albums`);
  }

  getPhotos(albumId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/albums/${albumId}/photos`);
  }

  getTodos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUserAlbums(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/albums`);
  }

  getUserTodos(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/todos`);
  }

  getUserPosts(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/posts`);
  }
}
