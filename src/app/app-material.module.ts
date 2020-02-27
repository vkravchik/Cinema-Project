import { NgModule } from '@angular/core';
import { MatIconModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class AppMaterialModule {  }
