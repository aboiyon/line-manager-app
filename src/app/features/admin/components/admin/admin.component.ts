import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../data/services/data.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  users: any[] = [];

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }

  assignManager(userId: number): void {
    this.authService.assignManagerRole(userId);
  }
}
