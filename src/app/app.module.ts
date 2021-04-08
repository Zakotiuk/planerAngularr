import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { EventItemComponent } from './components/EventItem/EventItem.component';
import { ListEventsComponent } from './components/ListEvents/ListEvents.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { EventDetailsComponent } from './components/EventDetails/EventDetails.component';
import { AddNewEventComponent } from './components/AddNewEvent/AddNewEvent.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from 'angular-notifier';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    ListEventsComponent,
    NavbarComponent,
    EventDetailsComponent,
    AddNewEventComponent,
    Page404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    NgxSpinnerModule,
    BrowserAnimationsModule,
   NotifierModule.withConfig({
     position:{
       horizontal:{
         position:'right',
       },
       vertical:{
         position:'top'
       }
     }
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
