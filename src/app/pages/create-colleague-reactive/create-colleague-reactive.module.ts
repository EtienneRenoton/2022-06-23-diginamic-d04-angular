import { AppRoutingModule } from './../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateColleagueReactiveComponent } from './create-colleague-reactive.component';
import { CreateColleagueReactivePage } from './create-colleague-reactive.page';



@NgModule({
  declarations: [
    CreateColleagueReactiveComponent,
    CreateColleagueReactivePage
  ],
  imports: [
  CommonModule,
   SharedModule,
   ReactiveFormsModule,
   AppRoutingModule
  ],
  exports: [CreateColleagueReactivePage
  ],
})
export class CreateColleagueReactiveModule { }
