import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEventComponent } from './components/AddNewEvent/AddNewEvent.component';
import { EventDetailsComponent } from './components/EventDetails/EventDetails.component';
import { HomeComponent } from './components/home/home.component';
import { ListEventsComponent } from './components/ListEvents/ListEvents.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, pathMatch:'full'},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'add', component: AddNewEventComponent, pathMatch:'full'},
  {path:'list', component: ListEventsComponent, pathMatch:'full'},
  {path:'event/:id', component: EventDetailsComponent},
  {path:'**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
