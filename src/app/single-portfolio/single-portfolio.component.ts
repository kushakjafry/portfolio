import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-single-portfolio',
  templateUrl: './single-portfolio.component.html',
  styleUrls: ['./single-portfolio.component.scss'],
})
export class SinglePortfolioComponent implements OnInit {
  portfolio: any = null;
  routeChanged: boolean = false;
  errMess;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.projectService.getProjects) {
      this.route.params.subscribe((params) => {
        this.routeChanged = true;
        this.portfolio = this.projectService.getProjects.find(
          (portfolio) => portfolio.name === params['id']
        );
      });
    }
    if (!this.portfolio) {
      this.route.params
        .pipe(
          switchMap((params: Params) => {
            return this.projectService.getPortfolio(params['id']);
          })
        )
        .subscribe(
          (portfolio) => {
            this.portfolio = portfolio;
          },
          (err) => {
            this.errMess = err;
          }
        );
    }
  }
}
