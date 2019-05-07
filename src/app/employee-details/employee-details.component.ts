import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { map, filter, switchMap } from 'rxjs/operators';

import { getEmployee } from './selectors';
import { fetchEmployee } from './actions';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  employee$ = this.store.select(getEmployee);

  constructor(readonly store: Store<{}>, readonly route: ActivatedRoute) {
    this.store.dispatch(fetchEmployee());
  }
}
