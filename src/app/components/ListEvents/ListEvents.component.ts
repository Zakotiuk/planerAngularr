import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'ListEvents',
  templateUrl: './ListEvents.component.html',
  styleUrls: ['./ListEvents.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(private eventsService: EventsService,
    private notifier: NotifierService,
private spinner: NgxSpinnerService) { }

  eventsList:EventModel[];
  visibleEventsList:EventModel[];
  hiddenEventsList:EventModel[];


  ngOnInit() {
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
      this.notifier.notify('success', ':)');
    }, 5000);
    this.eventsList = this.eventsService.getEvents();
    this.visibleEventsList=this.eventsService.getVisibleEvents();
    this.hiddenEventsList=this.eventsService.getHiddenEvents();

    this.eventsService.changeEvents.subscribe(data => {
      this.visibleEventsList=this.eventsService.getVisibleEvents();
      this.hiddenEventsList=this.eventsService.getHiddenEvents();
      this.eventsList = this.eventsService.getEvents();
    })

    console.log(this.eventsList)
    
  }

}
