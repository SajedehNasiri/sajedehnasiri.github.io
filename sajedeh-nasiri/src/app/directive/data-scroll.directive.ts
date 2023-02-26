import { Directive, HostListener, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTracker]'
})
export class DataScrollDirective implements OnInit {
  private timeoutId!: number;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.elRef.nativeElement.setAttribute('data-scroll', '0');
  }

  @HostListener('scroll', ['$event']) onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollTop = target.scrollTop;
    this.elRef.nativeElement.setAttribute('data-scroll', scrollTop === 0 ? '1' : scrollTop.toString());
    this.resetDataScroll();
  }

  @HostListener('touchstart') onTouchStart() {
    this.elRef.nativeElement.setAttribute('data-scroll', '1');
    this.resetDataScroll();
  }

  @HostListener('click') onClick() {
    this.elRef.nativeElement.setAttribute('data-scroll', '1');
    this.resetDataScroll();
  }

  private resetDataScroll() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = window.setTimeout(() => {
      this.elRef.nativeElement.setAttribute('data-scroll', '0');
    }, 5000);
  }
}
