import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { NoteModel } from 'src/app/models/note.model';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'EventItem',
  templateUrl: './EventItem.component.html',
  styleUrls: ['./EventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsService: EventsService,
    private notifier: NotifierService,
private spinner: NgxSpinnerService,) { }
  @Input() myEvent: EventModel;
  isModalVisible: boolean = false;
  model = new NoteModel();
  ngOnInit() {
  }

  changePriority(): void {
    // this.myEvent.isPriority != this.myEvent.isPriority;
    this.eventsService.changeIsPriority(this.myEvent.id)
    // this.isPriority = !this.isPriority;
  }

  changeIsHidden(): void{
    this.eventsService.changeIsHidden(this.myEvent.id);
  }

  modal():void{
    this.isModalVisible=true;
  }

  onSubmit(form : NgForm){
    this.spinner.show();
    this.model.idOfNote = this.myEvent.id;
      this.eventsService.addNotification(this.model);
    if(this.model.isValid()== true){
      setTimeout(()=>{
        this.spinner.hide();
        this.notifier.notify('success', ':)');
      }, 5000);
      form.resetForm();
    }
  }
  
}
