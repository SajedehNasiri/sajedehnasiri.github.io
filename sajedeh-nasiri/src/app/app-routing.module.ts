import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LandingComponent } from './components/landing/landing.component';
import { IndexturantComponent } from './components/projects/indexturant/indexturant.component';
import { LeafyComponent } from './components/projects/leafy/leafy.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'project/leafy', component: LeafyComponent },
  { path: 'project/indexturant', component: IndexturantComponent },
  { path: 'coming-soon', component: UnderConstructionComponent },
  { path: 'leafy', redirectTo: "project/leafy", pathMatch: "full" },
  { path: 'indexturant', redirectTo: "project/indexturant", pathMatch: "full" },
  { path: '', component: LandingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
