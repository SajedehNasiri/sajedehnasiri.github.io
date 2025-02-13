import { Component, Input } from '@angular/core';
import { ProjectItem } from 'src/app/models/project-item';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() relativePath!: boolean;

  projects: ProjectItem[] = [
    {
      name: 'Leafy', description: 'House plant adaptive online shop',
      imageFileName: 'tablet_laptop_and_smartphone_mockup_small.png',
      link: this.relativePath ? 'project/lefy' : 'leafy',
      bgColor: '#94C0E9'
    },
    {
      name: 'Toyabo',
      description: 'Print & Digital Assets Design',
      imageFileName: 'toyabo-thumbnail.png',
      link: this.relativePath ? 'project/toyabo' : 'toyabo',
      bgColor: '#94C0E9'
    },
    {
      name: 'Indexturant', description: 'Coffee shop equipment responsive online shop ',
      imageFileName: 'Indexturant.png',
      link: this.relativePath ? 'project/indexturant' : 'indexturant',
      bgColor: '#94C0E9'
    },
    // {
    //   name: 'The Clove Club',
    //   description: 'Redesign of restaurant website',
    //   imageFileName: 'pr_the_clove_club.png',
    //   link: '/coming-soon',
    //   bgColor: '#CCE5FC'
    // },
    // {
    //   name: 'High-five',
    //   description: 'Social connecting App design',
    //   imageFileName: 'high_five_iPhone.png',
    //   link: '/coming-soon',
    //   bgColor: '#CCE5FC'
    // },
  ];
}

