import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule,
        RouterModule.forChild(ADMIN_ROUTES)
  ],
})
export class AdminModule {}
