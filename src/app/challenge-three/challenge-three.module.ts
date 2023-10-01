
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ChalengeThreeRoutingModule } from './challenge-three-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ChalengeThreeRoutingModule
  ],
  declarations: [
    MainPageComponent
  ],
})
export class ChallengeThreeModule { }
