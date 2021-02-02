import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizePageComponent } from './visualize-page/visualize-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogbookPageComponent } from './logbook-page/logbook-page.component';
import { LoginLoggingSystemComponent } from './login-logging-system/login-logging-system.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { VisualizePageNewComponent } from './visualize-page-new/visualize-page-new.component';
import { VisualizeEachFullComponent } from './visualize-each-full/visualize-each-full.component';
import { VisualizeNodeListServerComponent } from './visualize-node-list-server/visualize-node-list-server.component';


const routes: Routes = [{path:'',component:HomepageComponent},
  { path: 'visualize', component: VisualizeNodeListServerComponent },
 // { path: 'logbook-login', component: LoginLoggingSystemComponent },
{ path: 'logbook', component: LogbookPageComponent },
{ path: 'visual', component: VisualizeEachFullComponent},
{path:'dashboard', component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
