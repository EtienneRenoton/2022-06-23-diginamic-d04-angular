import { TCEventService } from './../../../providers/tcevent.service';
import { filter, Subscription } from 'rxjs';
import { LikeHate } from './../../../models/like-hate';
import { VoteService } from './../../../providers/vote.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TCEvent } from 'src/app/models/tcevent';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  totalLike = 0;
  totalHate = 0;

  constructor (private voteService: VoteService, private tcEventSrv: TCEventService) { }
  eventSub!: Subscription

  ngOnInit(): void {
   this.voteService.abonner().subscribe(vote => {
    if (vote.vote == LikeHate.HATE){
      this.totalHate ++;
    }else{
      this.totalLike ++;
    }
   })
   this.eventSub = this.tcEventSrv.getTCEventObs()
   .pipe(filter(tcEvent => tcEvent===TCEvent.REFRESH))
    .subscribe(()=>this.refresh())

}

  refresh(){
    this.totalHate = 0;
    this.totalLike = 0;
  }
  ngOnDestroy(): void {
    this.eventSub.unsubscribe()
  }
}
