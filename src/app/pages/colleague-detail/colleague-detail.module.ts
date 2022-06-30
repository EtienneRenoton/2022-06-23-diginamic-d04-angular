import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColleagueDetailPage } from './colleague-detail.page';



@NgModule({
  declarations: [
    ColleagueDetailPage
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ColleagueDetailPage
  ]
})
export class ColleagueDetailModule { }
