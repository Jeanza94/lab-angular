
import { Component } from '@angular/core';

@Component({
  selector: 'challenge-one-examples',
  templateUrl: 'examples.component.html'
})

export class ExamplesComponent {
  public examples: string[] = [
    '[1, 2, 3, 4, 5, 6] -> [5, 4, 3, 2, 1]',
    '[10, 20, 30, 40] -> [40, 30, 20, 10]',
    '[6] -> []',
    '[66] -> []',
    '[65] -> [5]',
    '[6, 2, 1] -> [1 , 2]',
    '[60, 6, 5, 4, 3, 2, 7, 7, 29, 1] -> [1, 2, 2, 3, 4, 5, 0]',
  ]
}
