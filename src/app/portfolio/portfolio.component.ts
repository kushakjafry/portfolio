import { Component, Inject, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    @Inject('baseURL') public baseURL
  ) {}
  projects: any[] = [];
  errMess: string = '';
  ngOnInit(): void {
    if (this.projectService.getProjects) {
      this.projects = this.projectService.getProjects;
      console.log('already having projects');
    } else {
      this.projectService.getPortfolios().subscribe(
        (projects) => {
          this.projectService.setProjects = projects;
          this.projects = projects;
          console.log('fetched projects');
        },
        (errmess) => (this.errMess = errmess)
      );
    }
  }
}
