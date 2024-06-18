import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';

const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(AUTH_ROUTES), FormsModule],
  exports: [LoginComponent],
  providers: [AuthService],
})
export class AuthModule {}
