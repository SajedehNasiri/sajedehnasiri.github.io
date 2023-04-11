import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-leafy',
  templateUrl: './leafy.component.html',
  styleUrls: ['./leafy.component.scss']
})
export class LeafyComponent implements AfterViewInit {
  @ViewChild('gotop') gotop!: any;

  ngAfterViewInit(): void {
    this.gotop.scrollToTop();
  }
}
