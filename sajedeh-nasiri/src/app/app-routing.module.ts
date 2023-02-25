import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LeafyComponent } from './components/projects/leafy/leafy.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'project/leafy', component: LeafyComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: "about-me", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
