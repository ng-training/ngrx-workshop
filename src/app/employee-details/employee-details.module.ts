import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsComponent } from './employee-details.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [EmployeeDetailsComponent],
})
export class EmployeeDetailsModule {}
