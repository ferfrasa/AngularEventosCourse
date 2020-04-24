import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import{
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventDetailsComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

import { NavBarComponent} from './nav/navbar.component';
import { ShaService } from './shared/sha.service';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errores/404.component'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

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
    DurationPipe
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
              ShaService, ToastrService,
              EventRouteActivator,
              {
                provide:'canDeactivateCreateEvent',
                useValue: checkDirtyState
              },
              EventListResolver,
              AuthService
            ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saves. Really want to cancel?')
  return true;
}

