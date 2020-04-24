import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from 'src/app/shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[]
  @Input() filterBy: string;
  @Input() sortBy:string;
  visibleSessions:ISession[] =[]

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
}

function sortByNameAsc(s1: ISession, s2:ISession){
  if(s1.name >s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: ISession, s2:ISession){
  return s2.voters.length -s1.voters.length;
}
