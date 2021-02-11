import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from 'src/app/shared';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[]
  @Input() filterBy: string;
  @Input() sortBy:string;
  @Input() eventId: number;
  visibleSessions:ISession[] =[]


  constructor(public auth:AuthService, private voterService:VoterService){

  }

  //se llama cada ves que un i@Input cambia
  ngOnChanges(){
    if(this.sessions){
      this.filterSession(this.filterBy)
      this.sortBy=== 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
    }

  }

  filterSession(filter){
    if(filter==='all'){
      this.visibleSessions= this.sessions;

    }else{

      this.visibleSessions = this.sessions.filter(session=>{
        return session.level.toLocaleLowerCase()=== filter;
      })
    }

  }

  toggleVote(session: ISession){
    if(this.userHasVoted(session)){
      this.voterService.deleteVoter(this.eventId,session,
        this.auth.currentUser.userName)
    }else {
      this.voterService.addVoter(this.eventId,session,
        this.auth.currentUser.userName)
    }

    if(this.sortBy === 'votes')
      this.visibleSessions.sort(sortByNameAsc)

  }


  userHasVoted(session: ISession){
    return this.voterService.userHasVoted(session,
      this.auth.currentUser.userName)

  }

}


function sortByNameAsc(s1: ISession, s2:ISession){
  if(s1.name >s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: ISession, s2:ISession){
  return s2.voters.length -s1.voters.length;
}
