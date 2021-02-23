// probar el servicio de voantes

import { VoterService } from './voter.service';
import  { ISession } from '../../shared/event.model';
import { Observable, of } from 'rxjs';

let voterService: VoterService,
mockHttp;
describe('VoterService', () => {
  beforeEach( () => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);

  });

  describe('deleteVoter', () => {
    it('Deberai remover votos e la lista de votantes', () => {

      let session = { id: 6, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session as ISession, 'joe');
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');

    });

    it('Should call http.delete with the right URL', () => {

      let session = { id: 6, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session as ISession, 'joe');
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');

    });
  });

  describe('addVoter', () => {
    it('Should call http.post with the right URL', () => {

      let session = { id: 6, voters: ['john']};
      mockHttp.post.and.returnValue(of(false));

      voterService.addVoter(3, session as ISession, 'joe');
      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));

    });

  });



});
