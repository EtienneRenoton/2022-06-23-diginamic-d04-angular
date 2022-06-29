import { TCEventService } from './../../../providers/tcevent.service';
import { TCEvent } from './../../../models/tcevent';
import { VoteService } from './../../../providers/vote.service';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from './../../../models/vote';
import { LikeHate } from './../../../models/like-hate';
import { Component, Input, OnInit, OnDestroy, ɵɵqueryRefresh } from '@angular/core';
import { filter, Subscription } from 'rxjs';



@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit, OnDestroy {

 listVotes: Vote[] = [];

abonnement!: Subscription;
tcEventSub!: Subscription;

  constructor(private voteService: VoteService, private tcEventSrv: TCEventService ) { }

  ngOnInit(): void {
    this.refresh();
    this.abonnement = this.voteService.abonner().subscribe(()=>{
    this.refresh();
   });
   this.tcEventSub = this.tcEventSrv.getTCEventObs()
    .pipe(
      filter(tcEvt => tcEvt === TCEvent.REFRESH)
    )
    .subscribe(()=> this.refresh())

  }

 refresh() {
    this.voteService.getListeVotes()
    .subscribe(votesServeur => this.listVotes = votesServeur);
  }

  delVote(i:number){
    this.listVotes.splice(i, 1)
  }
  
  ngOnDestroy(): void {
    if (this.abonnement) {
      this.abonnement.unsubscribe();
    }
  }
}
