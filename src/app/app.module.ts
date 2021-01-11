import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProcessHttpMsgService } from './services/process-http-msg.service';
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseUrl';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactusComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HttpClientModule],
  providers: [
    ProcessHttpMsgService,
    ProjectService,
    { provide: 'baseURL', useValue: baseURL },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
