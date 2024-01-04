import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-indexturant',
  templateUrl: './indexturant.component.html',
  styleUrls: ['./indexturant.component.scss']
})
export class IndexturantComponent implements AfterViewInit {
  @ViewChild('gotop') gotop!: any;

  ngAfterViewInit(): void {
    this.gotop.scrollToTop();
  }
}
