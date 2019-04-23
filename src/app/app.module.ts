import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginModule } from './login/login.module';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    EmployeeListModule,
    EmployeeDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
