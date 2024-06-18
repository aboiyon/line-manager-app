import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'users',
    loadChildren: () =>  import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
        path: 'tasks', loadChildren: () => import('./features/tasks/tasks.module').then((m) => m.TasksModule)
  },

  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  //   { path: 'users/:id/posts', component: UserPostsComponent },
  //   { path: 'users/:id/albums', component: UserAlbumsComponent },
  //   { path: 'users/:id/todos', component: UserTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
