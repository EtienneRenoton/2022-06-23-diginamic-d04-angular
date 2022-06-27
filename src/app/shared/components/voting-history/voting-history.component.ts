import { VoteService } from './../../../providers/vote.service';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from './../../../models/vote';

import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from './../../../models/like-hate';



@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

 listVotes: Vote[] = [];



  constructor(private voteService: VoteService ) { }

  ngOnInit(): void {this.listVotes = this.voteService.voteList();
    
  }

  delVote(i:number){
    this.listVotes.splice(i, 1)
  }
}
