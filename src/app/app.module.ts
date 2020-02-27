import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { SnackComponent } from './components/snack/snack.component';
import { SnackDirective } from './core/directives/snack.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SnackComponent,
    SnackDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [SnackComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
