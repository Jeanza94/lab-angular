import { Component } from "@angular/core";


@Component({
  selector: 'challenge-three-examples',
  templateUrl: 'examples.component.html'
})
export class ExamplesComponent {
  public examples: string[] = [
    '[5, 7, 1, 1, 2, 3, 22]} -> 20',
    '[1, 1, 1, 1, 1]} -> 6',
    '[1, 5, 1, 1, 1, 10, 15, 20, 100]} -> 55'
  ]
}
