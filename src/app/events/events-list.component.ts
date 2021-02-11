import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { ActivatedRoute, } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  template: `<div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
       <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail #thumbnail  [event]="event" (eventClick)=" handleEventClicked($event)"></event-thumbnail>
          <h3>{{thumbnail.someProperty}}</h3>
          <button class="btn btn-primaru" (click)="thumbnail.logFoo()">Clcik</button>
      </div>
    </div>
   </div>`
})

export class EventListComponent implements OnInit{
  private events: IEvent[];
  constructor(private eventService: EventService,
               
              /*private toastr: ToastrService, */private router: ActivatedRoute){

  }

 ngOnInit(){
   this.events = this.router.snapshot.data['events'];
 }

  handleEventClicked(data){
    console.log('recived:', data)

  }


}
