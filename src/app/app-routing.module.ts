import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizePageComponent } from './visualize-page/visualize-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogbookPageComponent } from './logbook-page/logbook-page.component';

const routes: Routes = [{path:'',component:HomepageComponent},
  { path: 'visualize', component: VisualizePageComponent },
{ path: 'logbook', component: LogbookPageComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
