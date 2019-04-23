import { Injectable } from '@angular/core';
import { defer, from, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { employees } from './employees';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getAll(): Observable<Employee[]> {
    return defer(() =>
      from([
        employees.map(emp => ({
          ...emp,
          picture: '',
          phone: '',
          address: null,
        })),
      ]).pipe(delay(500))
    );
  }

  getEmployee(id: string): Observable<Employee> {
    const employee = employees.find(emp => emp.id === id);
    return defer(() => from([employee]).pipe(delay(500)));
  }
}
