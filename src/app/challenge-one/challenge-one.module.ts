
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChallengeOneRoutingModule } from './challenge-one-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormComponent } from './components/form/form.component';
import { ExamplesComponent } from './components/examples/examples.component';


@NgModule({
  imports: [
    CommonModule,
    ChallengeOneRoutingModule
  ],
  declarations: [
    MainPageComponent,
    FormComponent,
    ExamplesComponent
  ],
})
export class ChallengeOneModule { }
