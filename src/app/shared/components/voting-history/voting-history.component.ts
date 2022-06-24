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

  @Input() voteList: Vote[] = [
    {
      colleague:
      {
        pseudo: 'Jean',
        score: 150,
        photo: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=',

      },
      vote: LikeHate.HATE
    },
    {
      colleague:
      {
        pseudo: 'Jean',
        score: 150,
        photo: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=',

      },

      vote: LikeHate.LIKE
    },
    {
      colleague:

      {
        pseudo: 'Jean',
        score: 150,
        photo: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=',

      },
      vote: LikeHate.HATE
    },

  ];



  constructor() { }

  ngOnInit(): void {
  }

}
