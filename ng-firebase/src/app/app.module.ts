import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire/compat';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { AddnewComponent } from './addnew/addnew.component';


@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase) // Your config
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
