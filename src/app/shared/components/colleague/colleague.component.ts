import { Vote } from './../../../models/vote';
import { Subscription } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { VoteService } from './../../../providers/vote.service';
import { LikeHate } from './../../../models/like-hate';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {
  votes: Vote[] = [];

  @Input() colleague!: Colleague;

  abonnement!: Subscription;

  constructor (private voteService: VoteService) {}

  ngOnInit(): void {
    this.abonnement = this.voteService.abonner().subscribe(vote => {
      this.votes.unshift(vote);
    });
  }

  updateScore(choix:LikeHate){
    this.voteService.countVote(this.colleague, choix).subscribe(fullCol => {
      this.colleague.score = fullCol.score
    });
  }
}

   /* if (choix == LikeHate.LIKE){
      this.coll.score += 100;
    }
  if (choix == LikeHate.HATE){
    this.coll.score -= 100;
  }*/
  /*this.voteService.countVote ({
    colleague: {... this.coll},
    vote: choix
  })*/
