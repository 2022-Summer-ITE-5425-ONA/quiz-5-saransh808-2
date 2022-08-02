import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Output {
  success: boolean;
  payload: IProject[];
}

export interface IProject {
  // _id: string;
  title: string;
  description: string;
  category: string;
  // date: string;

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

  addProject(ti: string, desc:string, cat:string): Observable<any>{
    
    console.log(ti);
    console.log(desc);
    console.log(cat);
    let data:IProject = {
      title: ti,
      description: desc,
      category: cat
    }
    console.log(data);
    console.log("TEST");
    return this.http.post('https://node-todo-2021.herokuapp.com/projects', data);
  }
}
