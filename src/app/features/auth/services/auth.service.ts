import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { id: 1, username: 'admin', password: 'admin', roles: ['admin'] },
    { id: 2, username: 'manager', password: 'manager', roles: ['manager'] },
    { id: 3, username: 'user1', password: 'user1', roles: ['employee'] },
  ];
  private currentUser: any = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  /**
   * Logs out the current user by setting currentUser to null and redirects to the login page.
   */
  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser && this.currentUser.roles.includes('admin');
  }

  isManager(): boolean {
    return this.currentUser && this.currentUser.roles.includes('manager');
  }

  isEmployee(): boolean {
    return this.currentUser && this.currentUser.roles.includes('employee');
  }

  assignManagerRole(userId: number): void {
    const user = this.users.find((u) => u.id === userId);
    if (user && !user.roles.includes('manager')) {
      user.roles.push('manager');
    }
  }
}
