import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

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
  getTasks():Observable<any> {
    return this.http.get(`${this.apiUrl}/todos`);
  }

  getTask(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos/${id}`);
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

  getUserByEmail(email: string): Observable<any> {
    return this.http
      .get<any[]>(`${this.apiUrl}/users`)
      .pipe(map((users) => users.find((user) => user.email === email)));
  }

  assignManagerRole(username: string): Observable<any> {
    return this.getUsers().pipe(
      map((users) => {
        return users.map((user: { username: string; roles: string[] }) => {
          if (user.username === username) {
            user.roles = ['manager'];
          } else {
            user.roles = [];
          }
          return user;
        });
      }),
      catchError((error) => {
        console.error('Error fetching or processing users', error);
        return of([]);
      })
    );
  }
}
