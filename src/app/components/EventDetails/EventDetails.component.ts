import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'EventDetails',
  templateUrl: './EventDetails.component.html',
  styleUrls: ['./EventDetails.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  eventId!: string;
  myEvent!: EventModel;


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
    })
    this.myEvent = this.eventsService.getEventById(this.eventId);
  }

}
