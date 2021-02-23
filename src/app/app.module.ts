import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventDetailsComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index';

import { NavBarComponent} from './nav/navbar.component';
import { ShaService } from './shared/sha.service';
// import { ToastrService } from './common/toastr.service';
// import { TOASTR_TOKEN , Toastr} from './common/toastr.service';
import { JQ_TOKEN, Toastr, TOASTR_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index';

import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errores/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { HttpClientModule } from '@angular/common/http';





const toastr: Toastr = window.toastr;
const jQuery: Toastr = window.$;

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,


  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    ShaService,
    VoterService,
    EventResolver,
    // ToastrService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }, // enfoque a largo plazo
    EventListResolver,
    AuthService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {// si el componenre esta sucio
    return window.confirm('You have not saves. Really want to cancel?');
  }
  return true;
}

