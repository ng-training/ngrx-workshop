import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginModule } from './login/login.module';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';

import { userReducer } from './login/reducer';
import { logger } from './logger.reducer';
import { reset } from './reset.reducer';

const metaReducers: MetaReducer<any>[] = [logger, reset];

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
      { user: userReducer, router: routerReducer },
      {
        metaReducers,
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
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
