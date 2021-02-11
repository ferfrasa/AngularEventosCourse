import {
  EventListComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventDetailsComponent,
  CreateSessionComponent
} from './events/index'
import { Routes } from '@angular/router';
import { Error404Component } from './errores/404.component';
import { EventResolver } from './events/event-resolver.service';
export const appRoutes: Routes =[
  { path: 'events', component: EventListComponent, resolve: {events:EventListResolver}},
  { path: 'events/:id', component: EventDetailsComponent ,
  resolve: {event:EventResolver}


/*canActivate: [EventRouteActivator]*/},
  { path: 'event/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'] },//utiliza la funion y esta se inyecta como proveedor
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '' , redirectTo: '/events', pathMatch: 'full' },
  {path: 'user', loadChildren:'./user/user.module#UserModule'}
]
