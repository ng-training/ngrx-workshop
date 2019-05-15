import { TestBed, async } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, MaterialModule],
      declarations: [EmployeeListComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(EmployeeListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
