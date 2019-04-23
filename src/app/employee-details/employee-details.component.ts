import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  template: `
    <div *ngIf="employee$ | async as emp">
      <mat-form-field>
        <input matInput placeholder="Name" [value]="emp.name" />
      </mat-form-field>

      <mat-form-field>
        <input matInput placeholder="Email" [value]="emp.email" />
      </mat-form-field>

      <mat-form-field>
        <input matInput placeholder="Phone" [value]="emp.phone" />
      </mat-form-field>

      <mat-form-field>
        <input matInput placeholder="Position" [value]="emp.position" />
      </mat-form-field>

      <mat-form-field>
        <textarea matInput placeholder="Address">
          {{ emp.address.street }}
          {{ emp.address.number }}
          {{ emp.address.city }}
        </textarea
        >
      </mat-form-field>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 0 auto;
      }

      textarea {
        min-height: 80px;
      }
    `,
  ],
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
