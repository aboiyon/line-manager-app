import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'zone.js/lib/zone-impl';
import { TasksService } from '../../../tasks/services/tasks.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  @Input() viewMode: boolean = false;
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

  title: string = '';
  message: string = '';
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

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params['id']);
    }
  }

  getUser(id: number): void {
    this.userService.get(id).subscribe({
      next: (data) => {
        this.userOnDisplay = data;
        console.log('Fetched task details:', this.userOnDisplay);
      },
      error: (err) => {
        console.error('Error fetching task details:', err);
      },
    });
  }


  deleteUser(): void {
    this.userService.delete(this.userOnDisplay.id).subscribe({
      next: (response) => {
        console.log(response);
        window.alert('user deleted successfully')
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.error('Error deleting task:', err);
      },
    });
  }

}
