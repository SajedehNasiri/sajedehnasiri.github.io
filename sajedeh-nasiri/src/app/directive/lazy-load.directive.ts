// lazy-load.directive.ts

import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnInit {
  private sections: ElementRef[] = [];
  private currentIndex = 0;

  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    this.sections = this.collectSections();
  }

  private collectSections(): ElementRef[] {
    // Replace this logic with the actual way you identify and collect your sections
    const sectionElements = this.el.nativeElement.querySelectorAll('.lazy-load-section');
    return Array.from(sectionElements);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const windowHeight = window.innerHeight;
    const currentSection: any = this.sections[this.currentIndex];

    if (currentSection) {
      const sectionPosition = currentSection.getBoundingClientRect().top;
      if (sectionPosition < windowHeight) {
        // Load the current section when it is in the viewport
        this.loadSection(currentSection);
        // Move to the next section
        this.currentIndex++;
      }
    }
  }

  private loadSection(section: any): void {
    // Add a class to trigger the sliding animation
    section.classList.add('lazy-slide-in');
  }
}
