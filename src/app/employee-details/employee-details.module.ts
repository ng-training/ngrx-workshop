import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EmployeeDetailsComponent } from './employee-details.component';
import { MaterialModule } from '../material.module';
import { employeeReducer } from './reducer';
import { EmployeeEffects } from './effects';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    StoreModule.forFeature('employeeDetails', { data: employeeReducer }),
    EffectsModule.forFeature([EmployeeEffects]),
  ],
  declarations: [EmployeeDetailsComponent],
})
export class EmployeeDetailsModule {}
