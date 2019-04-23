import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [MaterialModule, RouterModule, FormsModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
