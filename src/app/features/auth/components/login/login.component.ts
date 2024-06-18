import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login(): Promise<void> {
        if (await this.authService.login(this.username, this.password)) {
          if (this.authService.isAdmin()) {
            window.alert('Welcome Admin!');
            this.router.navigate(['/admin']);
          } else if (this.authService.isManager()) {
            window.alert('Welcome Manager!');
            this.router.navigate(['/tasks']);
          } else if (this.authService.isEmployee()) {
            window.alert('Welcome Employee!');
            this.router.navigate(['/tasks/:id']);
          } else {
            this.router.navigate(['/home']) //Redirect unsigned in user
          }
        } else {
          this.error = 'Invalid username or password';
        }
      }
}
