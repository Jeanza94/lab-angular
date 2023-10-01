
import { Component, OnInit } from '@angular/core';
import { Links } from '../../interfaces/links.interface';

@Component({
  selector: 'shared-navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent   {

  public links: Links[] = [
    {
      route: '/challenge-one',
      text: 'one',
    },
    {
      route: '/challenge-two',
      text: 'two',
    },
    {
      route: '/challenge-three',
      text: 'three',
    },
  ]
}
