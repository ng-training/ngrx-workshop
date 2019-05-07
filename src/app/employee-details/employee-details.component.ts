import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  employee$: Observable<Employee>;
  constructor(
    readonly employeeService: EmployeeService,
    readonly route: ActivatedRoute
  ) {
    this.employee$ = this.route.paramMap.pipe(
      filter(params => params.has('id')),
      map(params => params.get('id')),
      switchMap(id => this.employeeService.getEmployee(id))
    );
  }
}
