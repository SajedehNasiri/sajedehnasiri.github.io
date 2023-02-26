import { Component, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-got-to-top',
  templateUrl: './got-to-top.component.html',
  styleUrls: ['./got-to-top.component.scss'],
  animations: [
    trigger('scaleIn', [
      state('false', style({ transform: 'scale(0)' })),
      state('true', style({ transform: 'scale(1)' })),
      transition('false => true', [
        animate('0.9s cubic-bezier(.44,-0.17,.34,1.97)')
      ]),
      transition('true => false', [
        animate('0.9s cubic-bezier(.44,-0.17,.34,1.97)')
      ])
    ])
  ]
})
export class GotToTopComponent {
  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
