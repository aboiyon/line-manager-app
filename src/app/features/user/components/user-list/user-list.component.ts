import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: any[] = [];

  //   constructor(private dataService: DataService) {}

  //   ngOnInit(): void {
  //     this.dataService.getUsers().subscribe((data: any[]) => {
  //       this.users = data;
  //       console.log('Users', data)
  //     });
  //   }

  userOnDisplay: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: '',
    company: '',
    phone: '',
    website: '',
  };

  @Input() user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: '',
    company: '',
    phone: '',
    website: '',
  };

  currentIndex: number = -1;
  title: string = '';
  message: string = '';
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Users', data);
      },
    });
  }

  refreshTasks(): void {
    this.getUsers();
    this.userOnDisplay = {
      id: 0,
      name: '',
      username: '',
      email: '',
      address: '',
      company: '',
      phone: '',
      website: '',
    };
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.userOnDisplay = user;
    this.currentIndex = index;
  }

  deleteAllTasks(): void {
    this.userService.deleteAll().subscribe({
      next: (response) => {
        console.log(response);
        this.refreshTasks();
      },
    });
  }
}
