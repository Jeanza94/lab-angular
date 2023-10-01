
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChallengeTwoRoutingModule } from './challenge-two-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  imports: [
    CommonModule,
    ChallengeTwoRoutingModule
  ],
  declarations: [
    MainPageComponent
  ],
})
export class ChallengeTwoModule { }
