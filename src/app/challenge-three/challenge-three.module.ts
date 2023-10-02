
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ChalengeThreeRoutingModule } from './challenge-three-routing.module';
import { ExamplesComponent } from './components/examples/examples.component';


@NgModule({
  imports: [
    CommonModule,
    ChalengeThreeRoutingModule
  ],
  declarations: [
    MainPageComponent,
    ExamplesComponent
  ],
})
export class ChallengeThreeModule { }
