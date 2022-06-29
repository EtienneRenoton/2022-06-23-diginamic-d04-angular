import { TCEvent } from './../../../models/tcevent';
import { TCEventService } from './../../../providers/tcevent.service';
import { filter, Subscription } from 'rxjs';
import { ColleagueService } from './../../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit {

listCollegues: Colleague[] = [];

tcEventSub!: Subscription;

  constructor(private colleagueService: ColleagueService, private tcEventSrv: TCEventService) { }
  ngOnDestroy(): void {
    this.tcEventSub.unsubscribe()
}
  ngOnInit(): void {
    this.refresh();
    this.tcEventSub = this.tcEventSrv.getTCEventObs()
    .pipe(
      filter(tcEvt => tcEvt === TCEvent.REFRESH)
    )
      .subscribe(()=>this.refresh())
  }
refresh() {
  this.colleagueService.listerColleague()
    .subscribe(listeCollegueServeur => this.listCollegues= listeCollegueServeur)
}
}
