
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChallengeOneRoutingModule } from './challenge-one-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  imports: [
    CommonModule,
    ChallengeOneRoutingModule
  ],
  declarations: [
    MainPageComponent
  ],
})
export class ChallengeOneModule { }
