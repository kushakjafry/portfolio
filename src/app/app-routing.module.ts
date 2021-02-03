import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  {
    path: 'portfolio/:id',
    component: SinglePortfolioComponent,
    data: { animation: 'About' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
