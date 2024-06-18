import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';

const USER_ROUTES: Routes = [
        {
                path: '', component: UserListComponent
        },
        {
                path: 'users/:id', component: UserDetailComponent
        }
]

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES),
    RouterModule,
    FormsModule
  ],
  exports: [UserListComponent]
})
export class UserModule { }
