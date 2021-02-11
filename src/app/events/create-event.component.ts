import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './index';
import { IEvent, ISession } from '../shared/event.model';
@Component({
  templateUrl:'./create-event.component.html',
  styles: [
    `em { float:right; color: #E05C65; padding-left:10px}
     .error input { background-color:#E3C3C5}
     .error ::-webkit-input-placeholder{ color: #999}
     .error ::-moz-placeholder {color: #999 }
     .error :-moz-placeholder { color: #999 }
     .error :ms-input-placeholder { color: #999 }
    `
  ]



})

export class CreateEventComponent implements OnInit {
  event:IEvent={
    date:new Date(),
    id:0,
    imageUrl:'',
    name:'',
    price:0,
    time:'',
    sessions: [],
    onlineUrl:'',
    location:{
      address:'',
      city:'',
      country:''
    }


  }
  isDirty: boolean = true;
  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit() {

   }

  cancel(){
    this.router.navigate(['/events']);//navegar a la ruta

  }
  saveEvent(formValues){
    console.log(formValues)
    this.eventService.saveEvent(formValues).subscribe(()=>{
      this.isDirty = false
      this.router.navigate(['/events']);

    })

  }
}

