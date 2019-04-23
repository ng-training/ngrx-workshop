import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <table mat-table [dataSource]="employees$" class="mat-elevation-z8">
      <!-- Index Column -->
      <ng-container matColumnDef="no">
        <th mat-header-cell *matHeaderCellDef>No.</th>
        <td mat-cell *matCellDef="let element; let i = index">{{ i }}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>Name</th>
        <td mat-cell *matCellDef="let element">{{ element.name }}</td>
      </ng-container>

      <!-- Email Column -->
      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef>Email</th>
        <td mat-cell *matCellDef="let element">{{ element.email }}</td>
      </ng-container>

      <!-- Position Column -->
      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef>Position</th>
        <td mat-cell *matCellDef="let element">{{ element.position }}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr
        mat-row
        *matRowDef="let row; columns: displayedColumns"
        [routerLink]="'/employee/' + row.id"
      ></tr>
    </table>
  `,
  styles: [
    `
      table {
        width: 80%;
        margin: 0 auto;
      }

      tr[mat-row]:hover {
        background-color: lightgrey;
      }
    `,
  ],
})
export class EmployeeListComponent {
  constructor(readonly employeeService: EmployeeService) {}

  employees$ = this.employeeService.getAll();
  displayedColumns: string[] = ['no', 'name', 'email', 'position'];
}
