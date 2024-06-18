import { Component } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  todo: Task = {
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  };

  submitted: boolean = false;

  constructor(private tasksService: TasksService) {}

  saveTask(): void {
    const data = {
      title: this.todo.title,
      id: this.todo.id,
      userId: this.todo.userId,
      completed: this.todo.completed,
    };
    this.tasksService.add(data).subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
      },
    });
  }

  newTask(): void {
    this.submitted = false;
    this.todo = {
      userId: 0,
      id: 0,
      title: '',
      completed: false,
    };
  }
}
