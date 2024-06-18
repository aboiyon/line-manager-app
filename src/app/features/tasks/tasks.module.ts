import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';

const TASKS_ROUTES: Routes = [
        {
                path: '', component: TasksComponent
        },
        {
                path: 'tasks/:id', component: TaskDetailsComponent
        },
        {
                path: 'add', component: AddTaskComponent
        }
]

@NgModule({
  declarations: [
    TasksComponent,
    TaskDetailsComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TASKS_ROUTES),  FormsModule
  ]
})
export class TasksModule { }
