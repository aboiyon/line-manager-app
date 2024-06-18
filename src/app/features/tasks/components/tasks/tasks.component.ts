import { Component, Input } from '@angular/core';
import { DataService } from '../../../../data/services/data.service';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  todos: Task[] = [];
  taskOnDisplay: Task = {
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  };

  @Input() todo: Task = {
          userId: 0,
          id: 0,
          title: '',
          completed: false
  }

  currentIndex: number = -1;
  title: string = '';
  message: string = '';
  constructor(private taskService: TasksService, private router: Router) {}

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getAll().subscribe({
      next: (data) => {
        this.todos = data;
        console.log('Tasks', data);
      },
    });
  }

  refreshTasks(): void {
    this.getTasks();
    this.taskOnDisplay = {
      userId: 0,
      id: 0,
      title: '',
      completed: false,
    };
    this.currentIndex = -1;
  }

  setActiveTask(task: Task, index: number): void {
    this.taskOnDisplay = task;
    this.currentIndex = index;
  }

  deleteAllTasks(): void {
    this.taskService.deleteAll().subscribe({
      next: (response) => {
        console.log(response);
        this.refreshTasks();
      },
    });
  }
}
