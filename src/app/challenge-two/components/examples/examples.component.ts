
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'challenge-two-examples',
  templateUrl: 'examples.component.html'
})

export class ExamplesComponent {
  public examples: string[] = [
    '[1, 2, 3, 5, 6, 8, 9] -> [1, 4, 9, 25, 36, 64]',
    '[-2, -1]} -> [1, 4]',
    '[-6, -5, 0, 5, 6] -> [0, 25, 25, 36, 36]',
    '[-10, 10]} -> []'
  ]
}
