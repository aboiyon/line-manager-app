// import { Component, Input, OnInit } from '@angular/core';
// import { Task } from '../../models/task';
// import { ActivatedRoute, Router } from '@angular/router';
// import { TasksService } from '../../services/tasks.service';

// @Component({
//   selector: 'app-task-details',
//   templateUrl: './task-details.component.html',
//   styleUrl: './task-details.component.scss',
// })
// export class TaskDetailsComponent implements OnInit {
//   @Input() viewMode: boolean = false;

//   title: string = '';
//   message: string = '';
//   taskOnDisplay: Task = {
//           userId: 0,
//           id: 0,
//           title: '',
//           completed: false
//   };

//   constructor(
//     private route: ActivatedRoute,
//     private tasksService: TasksService,
//     private router: Router
//   ) {}
//   ngOnInit(): void {
//     if (!this.viewMode) {
//       this.message = '';
//       this.getTask(this.route.snapshot.params['id']);
//     }
//   }
//   getTask(id: number): void {
//     this.tasksService.get(id).subscribe({
//       next: (data) => {
//         this.taskOnDisplay = data;
//         console.log(data);
//       },
//     });
//   }

//   updateTask(): void {
//     this.message = '';
//     this.tasksService
//       .update(this.taskOnDisplay.id, this.taskOnDisplay)
//       .subscribe({
//         next: (response) => {
//           console.log(response);
//           this.message = response.message
//             ? response.message
//             : `${this.taskOnDisplay.title} updated successfully`;
//         },
//       });
//   }

//   deleteTask(): void {
//     this.tasksService.delete(this.taskOnDisplay.id).subscribe({
//       next: (response) => {
//         console.log(response);
//         window.alert(`${this.taskOnDisplay.title} deleted successfully`)
//         this.router.navigate(['/tasks']);
//       },
//     });
//   }
// }
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  @Input() viewMode: boolean = false;
  @Input() todo: Task = {
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  };

  title: string = '';
  message: string = '';
  taskOnDisplay: Task = {
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  };

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTask(this.route.snapshot.params['id']);
    }
  }

  getTask(id: number): void {
    this.tasksService.get(id).subscribe({
      next: (data) => {
        this.taskOnDisplay = data;
        console.log('Fetched task details:', this.taskOnDisplay);
      },
      error: (err) => {
        console.error('Error fetching task details:', err);
      }
    });
  }

  editTask(): void {
    this.viewMode = true;
  }

  updateTask(): void {
    this.message = '';
    this.tasksService.update(this.taskOnDisplay.id, this.taskOnDisplay).subscribe({
      next: (response) => {
        console.log(response);
        // window.alert()
        this.message = response.message ? response.message : 'Task updated successfully';
        this.viewMode = true;
      },
      error: (err) => {
        console.error('Error updating task:', err);
      }
    });
  }

  deleteTask(): void {
    this.tasksService.delete(this.taskOnDisplay.id).subscribe({
      next: (response) => {
        console.log(response);
        window.alert('Task deleted successfully')
        this.router.navigate(['/tasks']);
      },
      error: (err) => {
        console.error('Error deleting task:', err);
      }
    });
  }

  cancelEdit(): void {
    this.viewMode = true;
    this.getTask(this.taskOnDisplay.id); // Re-fetch the task details to revert any changes made during edit
  }
}
