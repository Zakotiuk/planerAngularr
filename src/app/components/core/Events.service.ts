import { EventEmitter, Injectable } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';
import { NoteModel } from 'src/app/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events:EventModel[] = [
    new EventModel("Andrii Birthday", "...", "01/01/2021", "https://i.pinimg.com/originals/91/dd/b8/91ddb8751920595dfde2515820730482.gif", true),
    new EventModel("Demo project", "...", "26/08/2021","https://five.epicollect.net/api/internal/media/ec5-demo-project?type=photo&name=logo.jpg&format=project_thumb", false),
    new EventModel("Work with homework", "...", "23/11/2021","https://mustafavarici.com/wp-content/uploads/2020/08/Homework-1024x682.jpeg", false),
    new EventModel("Study in STEP", "...", "11/05/2021","https://yt3.ggpht.com/ytc/AAUvwniCrLrdm2czf92k8tmlOVNi041tOKc-5MUdNaPzCQ=s900-c-k-c0x00ffffff-no-rj", false),
  ]

  private notes: NoteModel[]=[]

  changeEvents = new EventEmitter<boolean>();

  addEvent(model: EventModel)
  {
    this.events.push(new EventModel(model.title, model.description, model.date,model.image, model.isPriority));
    this.changeEvents.emit(true);
    console.log("Success!!!!!!!");
  }

  getEventById(id:string):EventModel{
    return this.events.find(t=> t.id == id);
  }

  addNotification(model: NoteModel){
    this.notes.push(new NoteModel(model.description, model.idOfNote));
    this.changeEvents.emit(true);
    }

  getEvents():EventModel[]{
    return this.events;
  }

  changeIsHidden(id:string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isHidden=!this.events[index].isHidden;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  changeIsPriority(id:string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isPriority=!this.events[index].isPriority;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  getVisibleEvents():EventModel[]{
   return  this.events.filter( (obj) => {
      return obj.isHidden===false;
    });
  }

  getHiddenEvents():EventModel[]{
    return  this.events.filter( (obj) => {
       return obj.isHidden===true;
     });
   }

constructor() { }

}
