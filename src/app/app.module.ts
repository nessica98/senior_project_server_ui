import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { GoogleMapsModule } from '@angular/google-maps'

//import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { NodelistComponent } from './nodelist/nodelist.component';
import { VisualizePageComponent } from './visualize-page/visualize-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogbookPageComponent } from './logbook-page/logbook-page.component';
import { LoginLoggingSystemComponent } from './login-logging-system/login-logging-system.component';
import { VisualizeModalComponent } from './visualize-modal/visualize-modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { VisualizePageNewComponent } from './visualize-page-new/visualize-page-new.component';
import { VisualizeEachNodeComponent } from './nodes/visualize-each-node/visualize-each-node.component';
import { VisualizeEachFullComponent } from './visualize-each-full/visualize-each-full.component';
import { LogbookdetailComponent } from './modals/logbookdetail/logbookdetail.component';
<<<<<<< HEAD
import { VisualizeNodeListServerComponent } from './visualize-node-list-server/visualize-node-list-server.component';
=======
import { VisualizePageNodenewComponent } from './visualize-page-nodenew/visualize-page-nodenew.component';
>>>>>>> 5bf0fa106659a2af6f776c51510e319985e5decb



@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    NodelistComponent,
    VisualizePageComponent,
    HomepageComponent,
    LogbookPageComponent,
    LoginLoggingSystemComponent,
    VisualizeModalComponent,
    DashboardComponent,
    VisualizePageNewComponent,
    VisualizeEachNodeComponent,
    VisualizeEachFullComponent,
    LogbookdetailComponent,
<<<<<<< HEAD
    VisualizeNodeListServerComponent
=======
    VisualizePageNodenewComponent
>>>>>>> 5bf0fa106659a2af6f776c51510e319985e5decb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
