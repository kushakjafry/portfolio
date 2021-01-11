import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcessHttpMsgService } from './process-http-msg.service';
import { catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseUrl';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: any[];
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHttpMsgService
  ) {}
  getPortfolios(): Observable<any[]> {
    return this.http
      .get<any[]>(baseURL + 'projects')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getPortfolio(id: string): Observable<any[]> {
    return this.http
      .get<any[]>(baseURL + `projects/${id}`)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  public get getProjects(): any[] {
    return this.projects;
  }

  public set setProjects(projects: any[]) {
    this.projects = projects;
  }
}
