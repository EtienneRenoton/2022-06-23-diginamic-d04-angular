import { ColleagueService } from './../../providers/colleague.service';
import { FullColleague, } from './../../models/colleague';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tc-colleague-detail',
  templateUrl: './colleague-detail.page.html',
  styleUrls: ['./colleague-detail.page.scss']
})
export class ColleagueDetailPage implements OnInit {

  colleague:FullColleague = {
    pseudo : '',
    score : 0,
    photo : '',
    last: '',
    first: ''
  }


  constructor(private activatedRoute: ActivatedRoute, private colleagueServ: ColleagueService, private router: Router) {  }

  return(){
    this.router.navigateByUrl("/collegues")
  }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      let pseudo = paramMap.get('pseudo')
      if(pseudo)
    this.colleagueServ.getColleague(pseudo).subscribe(fullColleague => this.colleague = fullColleague)
  })
  }
}
