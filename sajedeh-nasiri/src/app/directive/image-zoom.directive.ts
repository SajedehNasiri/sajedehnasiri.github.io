import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageZoom]'
})
export class ImageZoomDirective {
  @Input('appImageZoom') scale: string = '1'; // Default scale is 1 if no value is provided

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'zoom-in');
  }

  @HostListener('click') onClick() {
    this.renderer.addClass(document.body, 'no-scroll');


    // Create overlay
    const overlay = this.renderer.createElement('div');
    this.renderer.addClass(overlay, 'overlay');
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', this.elementRef.nativeElement.src);
    this.renderer.appendChild(overlay, img);

    // Create close button
    const closeButton = this.renderer.createElement('button');
    this.renderer.setProperty(closeButton, 'innerHTML', 'X');
    this.renderer.setStyle(closeButton, 'position', 'absolute');
    this.renderer.setStyle(closeButton, 'top', '20px');
    this.renderer.setStyle(closeButton, 'right', '50px');
    this.renderer.setStyle(closeButton, 'background', 'transparent');
    this.renderer.setStyle(closeButton, 'border', 'none');
    this.renderer.setStyle(closeButton, 'color', 'black');
    this.renderer.setStyle(closeButton, 'font-size', '20px');
    this.renderer.setStyle(closeButton, 'cursor', 'pointer');
    this.renderer.appendChild(overlay, closeButton);

    this.renderer.appendChild(document.body, overlay);

    // Get screen dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get image dimensions
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Calculate scale based on screen and image dimensions
    const widthScale = windowWidth / naturalWidth;
    const heightScale = windowHeight / naturalHeight;
    const maxScale = Math.min(widthScale, heightScale);

    // Center the image
    const imgWidth = naturalWidth * maxScale;
    const imgHeight = naturalHeight * maxScale;

    if (naturalWidth >= naturalHeight) {
      this.renderer.setStyle(img, 'width', `80%`);
    } else {
      this.renderer.setStyle(img, 'height', `80%`);

    }

    this.renderer.setStyle(img, 'transform', `scale(${this.scale})`);

    // Set overlay styles
    this.renderer.setStyle(overlay, 'position', 'fixed');
    this.renderer.setStyle(overlay, 'top', '0');
    this.renderer.setStyle(overlay, 'left', '0');
    this.renderer.setStyle(overlay, 'width', '100vw');
    this.renderer.setStyle(overlay, 'height', '100vh');
    this.renderer.setStyle(overlay, 'background-color', 'rgba(255, 255, 255, 0.8)');
    this.renderer.setStyle(overlay, 'display', 'flex');
    this.renderer.setStyle(overlay, 'justify-content', 'center');
    this.renderer.setStyle(overlay, 'align-items', 'center');
    this.renderer.setStyle(overlay, 'z-index', '9999');

    // Change cursor style
    this.renderer.setStyle(document.body, 'cursor', 'zoom-out');

    // Handle overlay click
    this.renderer.listen(overlay, 'click', (event) => {
      this.closeOverlay(overlay);
    });

    // Listen for Esc key press
    this.renderer.listen('document', 'keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeOverlay(overlay);
      }
    });
  }

  private closeOverlay(overlay: HTMLElement): void {
    this.renderer.removeChild(document.body, overlay);
    this.renderer.removeStyle(document.body, 'cursor');
    this.renderer.removeClass(document.body, 'no-scroll');

  }
}
