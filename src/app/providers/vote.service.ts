import { Colleague } from 'src/app/models/colleague';
import { Vote } from './../models/vote';
import { LikeHate } from './../models/like-hate';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  
  private voteSubject = new Subject<Vote>();
  constructor() { }

  voteList(): Vote [] {
    return [
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
    ]

}
abonner(): Observable<Vote> {
return this.voteSubject.asObservable();
}

countVote(vote: Vote) {
  this.voteSubject.next(vote)
}

}
