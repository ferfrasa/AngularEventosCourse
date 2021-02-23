import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { DebugElement, Component , NO_ERRORS_SCHEMA} from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../../shared/event.model';
import { By } from '@angular/platform-browser';

// import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../../shared/duration.pipe';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';


/*@Component({})
class UpvoteComponent{

}*/

describe('SessionListCompoennte', () => {
  let fixture: ComponentFixture<SessionListComponent>,
      component: SessionListComponent,
      element: HTMLElement,
      debugEl: DebugElement;

  beforeEach(async(() => {
        const mockAuthService = {
          isAuthenticated: () => true,
          currentUser: { userName: 'Joe'}
        }; // mock del servicio inyectado en ele compoennte
        const mockVoterService = {
          userHasVoted: () => true
        };

        TestBed.configureTestingModule({ // estructura similar a la de un modulo
          imports: [],
          declarations: [
            SessionListComponent,
            // UpvoteComponent,
            DurationPipe,
            CollapsibleWellComponent
          ],
          providers: [
            {provide: AuthService, useValue: mockAuthService}, // mock del servico no http
            {provide: VoterService, useValue: mockVoterService},
          ],
          schemas: [
            NO_ERRORS_SCHEMA// No se preocupe por elemtos html que no reconoce
          ]
        });

      }));
  beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent); // COMPONENTE
        component = fixture.componentInstance; // COMPONENTE NATIVO
        debugEl = fixture.debugElement; // eLEMENTO DE DEPURACIÓN
        element = fixture.nativeElement;
      });
  describe('initial display', () => {
        it('should have the correct session tittle', () => {
          component.sessions = [
          { id: 3 ,
              name: 'Session',
              presenter: 'Joe',
              duration: 1,
              level: ' begginer',
              abstract: 'abstract',
              voters: ['john', 'bob']
          }];
          component.filterBy = 'all';
          component.sortBy = 'name';
          component.eventId = 4;
          component.ngOnChanges();
          fixture.detectChanges();
          expect(element.querySelector('[well-title]').textContent).toContain('Session');
          expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session');

      });

    });
});

