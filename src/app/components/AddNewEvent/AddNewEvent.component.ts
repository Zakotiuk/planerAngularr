import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'AddNewEvent',
  templateUrl: './AddNewEvent.component.html',
  styleUrls: ['./AddNewEvent.component.css']
})
export class AddNewEventComponent implements OnInit {

  model = new EventModel();
  errorMessange: string;
  constructor(private eventService: EventsService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router){}

  onSubmit(form: NgForm){

    this.spinner.show();
    if(this.model.isValid() == false){
      this.errorMessange = "Error : enter hole fileds";

      setTimeout(()=>{
        this.spinner.hide();
        this.notifier.notify('warning', ':(');
      }, 5000);
    }
    else{
    this.eventService.addEvent(this.model);
    this.errorMessange = "";
    setTimeout(()=>{
      this.spinner.hide();
      this.notifier.notify('success', 'You are awesome! I mean it!');
      this.router.navigate(['/'])
    }, 5000);
    form.resetForm();
    }
  }

  ngOnInit() {
  }

}
