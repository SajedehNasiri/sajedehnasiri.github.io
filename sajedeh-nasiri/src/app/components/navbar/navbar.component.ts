import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideIn', [
      state('true', style({ transform: 'translateX(0)' })),
      state('false', style({ transform: 'translateX(-100%)' })),
      transition('false => true', [
        animate('0.5s cubic-bezier(.08,.48,1,1.07)')
      ]),
      transition('true => false', [
        animate('0.8s cubic-bezier(.62,-0.34,.63,1.62)')
      ])
    ])
  ]
})
export class NavbarComponent {
  hasSideNav: boolean = false;
}
