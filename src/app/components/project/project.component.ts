import { Component, OnInit, Output } from '@angular/core';
import { IProject, ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  
  constructor(private myProjectService: ProjectService) {}
  output: IProject[] = [];
  ngOnInit(): void {
    this.myProjectService.getProjects().subscribe((data) => {
      this.output = data.payload;
    });
    
  }

  // addProject() {
  //   this.myProjectService.addProject().subscribe((data) => console.log(data));
  // }

}
