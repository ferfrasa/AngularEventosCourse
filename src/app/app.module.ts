import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent} from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { from } from 'rxjs';
import { ShaService } from './shared/sha.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent} from './events/event-details/event-details.component'
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component'

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
              ShaService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }

