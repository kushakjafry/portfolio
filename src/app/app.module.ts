import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { baseURL } from './shared/baseUrl';
import { ReactiveFormsModule } from '@angular/forms';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { InlineSVGModule } from 'ng-inline-svg';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactusComponent,
    SinglePortfolioComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
    InlineSVGModule.forRoot(),
  ],
  providers: [
    ProcessHttpMsgService,
    ProjectService,
    { provide: 'baseURL', useValue: baseURL },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
