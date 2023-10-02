
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ChalengeThreeRoutingModule } from './challenge-three-routing.module';
import { ExamplesComponent } from './components/examples/examples.component';
import { FormComponent } from './components/forms/form.component';
import { ChallengeThreeService } from './services/challenge-three.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ChalengeThreeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainPageComponent,
    ExamplesComponent,
    FormComponent
  ],
  providers: [
    ChallengeThreeService
  ]
})
export class ChallengeThreeModule { }
