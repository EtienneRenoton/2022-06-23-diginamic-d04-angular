import { ColleagueService } from './../../../providers/colleague.service';
import { AddColleague } from './../../../models/colleague';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent implements OnInit {

  addColleague: AddColleague = {
  pseudo: '',
  last:'',
  first:'',
  photo:'',

};

  constructor(private collegueService:ColleagueService) { }

  ngOnInit(): void {
  }

  valider() {
    this.collegueService
    .addNewColleague(this.addColleague)
    .subscribe((collegue)=> {
      this.addColleague = collegue
    });
    this.addColleague = {
      pseudo: '',
      last:'',
      first:'',
      photo:'',
    }
  }

}

