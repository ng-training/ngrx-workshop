import { TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { MaterialModule } from '../material.module';
import { EmployeeListComponent } from './employee-list.component';
import { RouterTestingModule } from '@angular/router/testing';

import { getEmployees } from './selectors';
import { employees } from '../services/employees';

describe('EmployeeListComponent', () => {
  let store: MockStore<{}>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, MaterialModule, RouterTestingModule],
      declarations: [EmployeeListComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.get(Store);
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EmployeeListComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  });

  it('shows empty list', () => {
    store.overrideSelector(getEmployees, []);

    const fixture = TestBed.createComponent(EmployeeListComponent);

    const allRows = (fixture.nativeElement as HTMLElement).querySelectorAll(
      'tr'
    );

    expect(allRows.length).toBe(0);
  });

  it('shows employees', () => {
    store.overrideSelector(getEmployees, employees);

    const fixture = TestBed.createComponent(EmployeeListComponent);
    fixture.detectChanges();
    const allRows = (fixture.nativeElement as HTMLElement).querySelectorAll(
      'tr'
    );

    expect(allRows.length).toEqual(employees.length + 1);
  });
});
