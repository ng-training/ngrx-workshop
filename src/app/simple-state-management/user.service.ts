import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
interface UserState {
  name: string;
  age: number;
  position: string;
  email: string;
}

const initialState: UserState = {
  name: 'Adrian',
  age: 33,
  position: 'developer',
  email: 'adrian.faciu@visma.com',
};

@Injectable({
  providedIn: 'root',
})
export class UserServiceState {
  private state$ = new BehaviorSubject<UserState>(initialState);

  get userState$() {
    return this.state$.asObservable();
  }

  setUserState(newState: Partial<UserState>) {
    this.state$.next({ ...this.state$.value, ...newState });
  }
}

class MyCustomComponent {
  constructor(readonly userService: UserServiceState) {
    const userInfo$ = this.userService.userState$;

    this.userService.setUserState({ age: 34 });
  }
}
