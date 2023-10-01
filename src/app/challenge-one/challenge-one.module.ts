
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChallengeOneRoutingModule } from './challenge-one-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormComponent } from './components/form/form.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeOneService } from './services/challenge-one.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChallengeOneRoutingModule,
    SharedModule
  ],
  declarations: [
    MainPageComponent,
    FormComponent,
    ExamplesComponent
  ],
  providers: [
    ChallengeOneService
  ]
})
export class ChallengeOneModule { }
