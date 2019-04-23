import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [MaterialModule, RouterModule],
  declarations: [EmployeeListComponent],
})
export class EmployeeListModule {}
