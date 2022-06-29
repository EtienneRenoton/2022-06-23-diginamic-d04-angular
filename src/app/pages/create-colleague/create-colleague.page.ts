import { ColleagueService } from './../../providers/colleague.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-create-colleague',
  templateUrl: './create-colleague.page.html',
  styleUrls: ['./create-colleague.page.scss']
})
export class CreateColleaguePage implements OnInit {

  constructor(private ColleagueService: ColleagueService ) { }

  ngOnInit(): void {
  }

}
