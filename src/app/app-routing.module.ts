import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports Componenents
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { BioComponent } from './pages/bio/bio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'technologies', component: TechnologiesComponent},
  {path: 'bio', component: BioComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},  
  {path: 'item/:id', component: ItemComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
