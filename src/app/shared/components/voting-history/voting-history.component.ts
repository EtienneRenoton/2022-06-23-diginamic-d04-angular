import { VoteService } from './../../../providers/vote.service';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from './../../../models/vote';
import { LikeHate } from './../../../models/like-hate';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit, OnDestroy {

 listVotes: Vote[] = [];
 LikeHate = LikeHate;
abonnement!: Subscription;

  constructor(private voteService: VoteService ) { }

  ngOnInit(): void {
    this.abonnement = this.voteService.abonner().subscribe(vote=> this.listVotes.push(vote));
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
