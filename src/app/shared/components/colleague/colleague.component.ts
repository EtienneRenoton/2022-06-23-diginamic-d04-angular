import { LikeHate } from './../../../models/like-hate';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  @Input() coll!: Colleague;

  constructor() { }

  ngOnInit(): void {
  }
  updateScore(choix:LikeHate){
    if (choix == LikeHate.LIKE){
      this.coll.score += 100;
    }
  if (choix == LikeHate.HATE){
    this.coll.score -= 100;
  }
}
}
