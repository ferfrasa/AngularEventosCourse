import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventDetailsComponent
} from './events/index'

import { NavBarComponent} from './nav/navbar.component';
import { ShaService } from './shared/sha.service';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errores/404.component'
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saves. Really want to cancel?')
  return true;
}

