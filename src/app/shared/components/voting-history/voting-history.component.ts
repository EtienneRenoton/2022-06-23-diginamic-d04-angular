import { Vote } from './../../../models/vote';

import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from './../../../models/like-hate';
import { Colleague } from './../../../models/colleague';


@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  @Input() vote!: Vote

  toString(choix:LikeHate):string{
    if (choix == LikeHate.LIKE){
      return "aimé(e)"
    }
    else{
      return "detesté(e)"
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
