import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  @ViewChild('projectSection') projectSection!: ElementRef;

  scrollToBottom() {
    window.scrollTo({
      top: this.projectSection.nativeElement.offsetTop + 50,
      behavior: 'smooth'
    });
  }
}
