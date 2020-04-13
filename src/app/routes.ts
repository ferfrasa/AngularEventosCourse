import {
  EventListComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventDetailsComponent
} from './events/index'
import { Routes } from '@angular/router';
import { Error404Component } from './errores/404.component';
export const appRoutes: Routes =[
  { path: 'events', component: EventListComponent, resolve: {events:EventListResolver}},
  { path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivator]},
  { path: 'event/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'] },
  { path: '404', component: Error404Component },
  { path: '' , redirectTo: '/events', pathMatch: 'full' },
  {path: 'user', loadChildren:'./user/user.module#UserModule'}
]
