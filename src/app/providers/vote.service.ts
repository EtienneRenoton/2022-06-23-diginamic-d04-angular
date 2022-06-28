import { VotingHistoryComponent } from './../shared/components/voting-history/voting-history.component';
import { FullColleague } from './../models/colleague';
import { HttpClient } from '@angular/common/http';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from './../models/vote';
import { LikeHate } from './../models/like-hate';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private voteSubject = new Subject<Vote>();

  constructor(private http: HttpClient) { }


  /* {
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
*/

  abonner(): Observable<Vote> {
    return this.voteSubject.asObservable();
  }

  countVote(colleague: Colleague, vote: LikeHate) {
    return this.http.post<FullColleague>('https://colleagues-app.herokuapp.com/api/v2/votes', {
      "pseudo": colleague.pseudo,
      "like_hate": vote
    }).pipe(
      tap(fullColleague => this.voteSubject.next({
        colleague: fullColleague,
        vote,
        score: fullColleague.score
      }))
    )
  }
  getListeVotes(){
    return this.http.get<Vote[]>('https://colleagues-app.herokuapp.com/api/v2/votes');
  }
}
