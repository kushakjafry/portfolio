import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio/:id', component: SinglePortfolioComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
