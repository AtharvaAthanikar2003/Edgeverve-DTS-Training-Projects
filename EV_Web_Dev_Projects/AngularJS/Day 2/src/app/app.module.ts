import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { Demo02Component } from './demo02/demo02.component';
import { DirectivesComponent } from './directives/directives.component'; // Assuming your Demo02 component is part of the project

@NgModule({
  declarations: [
    AppComponent,
    Demo02Component,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
