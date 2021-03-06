import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { SnackComponent } from './components/snack/snack.component';
import { SnackDirective } from './core/directives/snack.directive';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmService } from './core/services/film.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './core/services/auth.service';
import { AuthComponent } from './pages/auth/auth.component';
import { FilmComponent } from './pages/film/film.component';
import { Location } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SnackComponent,
    SnackDirective,
    TableComponent,
    CardComponent,
    AuthComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    FilmService,
    AuthService,
  ],
  entryComponents: [SnackComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
