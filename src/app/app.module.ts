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

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService,
              ShaService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }

