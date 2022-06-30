import { AppRoutingModule } from './../../app-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from './welcome.page';



@NgModule({
  declarations: [
    WelcomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    WelcomePage
  ]
})
export class WelcomeModule { }
