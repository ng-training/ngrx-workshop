import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { fetchEmployees } from './actions';
import { getEmployees } from './selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(readonly store: Store<{}>) {}

  employees$ = this.store.select(getEmployees).pipe(tap(console.log));

  displayedColumns: string[] = ['no', 'name', 'email', 'position'];

  ngOnInit() {
    this.store.dispatch(fetchEmployees());
  }
}
