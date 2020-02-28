import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatInputModule, MatSnackBarModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AppMaterialModule {  }
