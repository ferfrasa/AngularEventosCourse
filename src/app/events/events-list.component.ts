import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `<div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
       <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail #thumbnail (click)="evento(event.name)"  [event]="event" (eventClick)=" handleEventClicked($event)"></event-thumbnail>
          <h3>{{thumbnail.someProperty}}</h3>
          <button class="btn btn-primaru" (click)="thumbnail.logFoo()">Clcik</button>
      </div>
    </div>
   </div>`
})

export class EventListComponent implements OnInit{
  private events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService){

  }

 ngOnInit(){
  this.events= this.eventService.getEvents();

 }

  handleEventClicked(data){
    console.log('recived:', data)

  }
  evento(eventName){
    this.toastr.success(eventName)

  }

}
