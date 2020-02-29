import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.model'

const BASE_URL = "https://bb-base-server.herokuapp.com";
const MODEL = "projects"

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  all(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url());
  }

  findOne(id: string): Observable<Project> {
    return this.http.get<Project>(this.urlWithId(id));
  }

  create(project: Project): Observable<Project> {
    return this.http.post<Project>(this.url(), project);
  }

  update(project: Project): Observable<Project> {
    return this.http.patch<Project>(this.urlWithId(project.id), project);
  }

  delete(project: Project): Observable<Project> {
    return this.http.delete<Project>(this.urlWithId(project.id));
  }

  private url() {
    return `${BASE_URL}/${MODEL}`;
  }

  private urlWithId(id: string) {
    return `${this.url()}/${id}`
  }

}
