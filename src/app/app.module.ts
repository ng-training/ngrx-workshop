import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginModule } from './login/login.module';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';

import { userReducer } from './login/reducer';

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
    StoreModule.forRoot(
      { user: userReducer },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
