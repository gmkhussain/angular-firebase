import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire/compat';
import { PolicyListComponent } from './policy-list/policy-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase) // Your config

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
