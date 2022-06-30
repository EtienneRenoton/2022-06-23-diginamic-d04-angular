import { AddColleague } from './../../../models/colleague';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss'],
})
export class CreateColleagueReactiveFormsComponent implements OnInit {
  colForm: FormGroup;
  newColleague: AddColleague = {
    pseudo: '',
    last: '',
    first: '',
    photo: '',
  };

  constructor(
    private fb: FormBuilder,
    private colleagueService: ColleagueService
  ) {
    this.colForm = fb.group({
      pseudo: ['', [Validators.required]],
      last: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(19)]],
      first: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(19)]],
      photo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  valider(): void {
    this.newColleague = this.colForm.value;
    this.colleagueService
      .addNewColleague(this.newColleague)
      .subscribe((col) => {
        this.newColleague = col;
      });
    this.colForm.setValue({
      pseudo: '',
      last: '',
      first: '',
      photo: '',
    });
  }
disableButton() {
  return (
    this.colForm.controls['pseudo'].invalid ||
    this.colForm.controls['nom'].invalid ||
    this.colForm.controls['prenom'].invalid ||
    this.colForm.controls['url'].invalid
  )
}
  checkFields(name: string) {
    return (
      this.colForm.controls[name].invalid && this.colForm.controls[name].dirty
    );
  }
}
