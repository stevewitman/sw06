import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectsService, Project } from '@bb/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'bb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  project: Project;
  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getProjects();
    this.initForm();
  }

  select(project: Project) {
    this.project = project;
    this.form.patchValue(project);
  }

  save(project: Project) {
    if (project.id) {
      this.update(project);
    } else {
      this.create(project);
    }
  }

  delete(project: Project) {
    this.projectsService.delete(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  reset() {
    this.form.reset();
    this.project = {} as Project;
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    })
  }

  private create(project: Project) {
    this.projectsService.create(project)
    .subscribe(() => {
      this.reset();
      this.getProjects();
    })
  }

  private update(project: Project) {
    this.projectsService.update(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  private getProjects() {
    this.projects$ = this.projectsService.all();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: ['', Validators.compose([
        Validators.required
      ])],
      details: ['', Validators.compose([
        Validators.required
      ])],
      importanceLevel: [0],
    })
  }

}
