import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserModule } from './features/user/user.module';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './features/admin/admin.module';
import { ApiService } from './data/services/api.service';
import { TasksModule } from './features/tasks/tasks.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    UserModule,
    LayoutModule,
    AdminModule,
    TasksModule
  ],
  providers: [
    provideAnimationsAsync(),
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
