import { Component, OnInit } from "@angular/core";
import { EventService } from '../../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from 'src/app/shared';

@Component({
  templateUrl:'./event-details.component.html',
  styles: [`
     .container { padding-left:20px; padding-right: 20px}
     .event-image: { height: 100px;}
     a { cursor: pointer}
  `
  ]
})

export class EventDetailsComponent implements OnInit{
  event: IEvent
  addMode:boolean
  filterBy: string= 'all'
  sortBy: string= 'votes'
  constructor(private eventService: EventService, private router: ActivatedRoute){


  }

ngOnInit(){

  this.router.params.forEach((data)=>{

    //this.eventService.getEvent( +this.router.snapshot.params['id']).subscribe((event:IEvent)=>{
      this.event=data['event']
      this.addMode= false;

   // })//obtener parametro por url


  })


}

addSession(){
  this.addMode = true;
}
saveNewSession(session:ISession){
  const nextID = Math.max.apply(null, this.event.sessions.map(
    s=> s.id
  ));
  session.id = nextID +1
  this.event.sessions.push(session)
  this.eventService.saveEvent(this.event)
  this.addMode = false

}

cancelAddSession(){
  this.addMode = false
}
}
