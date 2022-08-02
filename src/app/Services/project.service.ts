import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Output {
  success: boolean;
  payload: IProject[];
}

export interface IProject {
  _id: string;
  title: number;
  description: string;
  category: string;
  date: string;

}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url: string = 'https://node-todo-2021.herokuapp.com/projects';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Output> {
    return this.http.get<Output>(this.url);
  }

  addProject(title: string, description:string, category:string): Observable<IProject> {
    return this.http.post<IProject>(this.url, {
      title: title,
      description: description,
      category: category
    });
  }
}
