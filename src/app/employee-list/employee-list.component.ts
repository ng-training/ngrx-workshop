import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  constructor(readonly employeeService: EmployeeService) {}

  employees$ = this.employeeService.getAll();
  displayedColumns: string[] = ['no', 'name', 'email', 'position'];
}
