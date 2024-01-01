import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormF01Component } from './forms/my-form-f01/my-form-f01.component';
import { MyFormF02Component } from './forms/my-form-f02/my-form-f02.component';
import { HttpClientModule } from '@angular/common/http';
import { MyFormAutocompleteComponent } from './forms/my-form-autocomplete/my-form-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MyFormF01Component,
    MyFormF02Component,
    MyFormAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
