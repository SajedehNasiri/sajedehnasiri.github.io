import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }



  @ViewChild('projectSection') projectSection!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveNavItem();
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          this.router.navigate(['/' + sectionId]);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.5
    });

    observer.observe(this.projectSection.nativeElement);
  }

  updateActiveNavItem() {
    const activeLink = document.querySelector('.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    const currentRoute = this.router.url;
    const navLink = document.querySelector(`[routerLink='${currentRoute}']`);
    if (navLink) {
      navLink.classList.add('active');
    }
  }
}
