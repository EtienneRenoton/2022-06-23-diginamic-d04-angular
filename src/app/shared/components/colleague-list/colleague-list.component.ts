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


  constructor(private colleagueService: ColleagueService) { }

  ngOnInit(): void { this.listCollegues = this.colleagueService.colleagueList();
  }

}
