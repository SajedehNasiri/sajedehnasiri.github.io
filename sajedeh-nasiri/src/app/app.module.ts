import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LeafyComponent } from './components/projects/leafy/leafy.component';
import { GotToTopComponent } from './components/got-to-top/got-to-top.component';
import { DataScrollDirective } from './directive/data-scroll.directive';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderImageComponent } from './components/header-image/header-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    ProjectsComponent,
    ResumeComponent,
    LeafyComponent,
    GotToTopComponent,
    DataScrollDirective,
    LandingComponent,
    HeaderImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
