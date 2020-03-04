import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class AppMaterialModule {  }
