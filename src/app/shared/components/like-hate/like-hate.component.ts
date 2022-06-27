import { LikeHate } from './../../../models/like-hate';
import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  LikeHate = LikeHate;

  constructor() { }
  @Input() score!: number;

  ngOnInit(): void {
  }
@Output() likeHateOutput = new EventEmitter <LikeHate>()
onClick(choix: LikeHate) {
this.likeHateOutput.emit(choix)

}

}
