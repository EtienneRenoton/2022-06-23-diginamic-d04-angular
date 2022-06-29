import { TCEventService } from './../../providers/tcevent.service';
import { Component, OnInit } from '@angular/core';
import { TCEvent } from 'src/app/models/tcevent';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {

  constructor(private tcEventSrv: TCEventService) { }

  ngOnInit(): void {
  }

  refresh(){
    this.tcEventSrv.publish(TCEvent.REFRESH);
  }

}
