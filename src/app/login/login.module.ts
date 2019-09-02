import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../material.module';
import { UserEffects } from './effects';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    FormsModule,
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
