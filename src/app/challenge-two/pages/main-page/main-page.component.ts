
import { Component, inject } from '@angular/core';
import { ChallengeTwoService } from '../../services/challenge-two.service';

@Component({
  selector: 'challenge-two-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  private challengeTwoService = inject(ChallengeTwoService)

  public answer = this.challengeTwoService.answerGetter
  public isAnswer = this.challengeTwoService.isAnswer
}
