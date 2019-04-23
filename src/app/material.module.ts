import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatTableModule, MatSnackBarModule],
  exports: [MatButtonModule, MatInputModule, MatTableModule, MatSnackBarModule],
})
export class MaterialModule {}
