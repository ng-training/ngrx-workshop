import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EmployeeListComponent } from './employee-list.component';
import { MaterialModule } from '../material.module';
import { EmployeesEffects } from './effects';
import { employeesReducer } from './reducer';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    StoreModule.forFeature('employeesList', { employees: employeesReducer }),
    EffectsModule.forFeature([EmployeesEffects]),
  ],
  declarations: [EmployeeListComponent],
})
export class EmployeeListModule {}
