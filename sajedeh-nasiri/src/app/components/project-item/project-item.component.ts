import { Component, Input } from '@angular/core';
import { ProjectItem } from 'src/app/models/project-item';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  @Input() data!: ProjectItem;



}
