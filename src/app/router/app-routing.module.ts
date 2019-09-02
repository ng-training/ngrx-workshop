import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  StoreRouterConnectingModule,
  NavigationActionTiming,
  RouterState,
} from '@ngrx/router-store';

import { LoginComponent } from '../login/login.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { CustomSerializer } from './custom-route-serializer';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PreActivation,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
