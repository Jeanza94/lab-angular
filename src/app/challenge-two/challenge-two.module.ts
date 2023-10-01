
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChallengeTwoRoutingModule } from './challenge-two-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { FormComponent } from './components/forms/form.component';
import { ChallengeTwoService } from './services/challenge-two.service';

@NgModule({
  imports: [
    CommonModule,
    ChallengeTwoRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainPageComponent,
    ExamplesComponent,
    FormComponent
  ],
  providers: [
    ChallengeTwoService
  ]
})
export class ChallengeTwoModule { }
