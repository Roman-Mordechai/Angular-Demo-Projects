import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyForm1Component } from './forms/my-form1/my-form1.component';
import { MyForm2Component } from './forms/my-form2/my-form2.component';
import { SwitchComponent } from './custom-components/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    MyForm1Component,
    MyForm2Component,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
