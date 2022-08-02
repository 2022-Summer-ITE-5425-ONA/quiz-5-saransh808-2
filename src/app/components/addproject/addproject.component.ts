import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  constructor(private myProjectService: ProjectService) {}

  ngOnInit(): void {}

  projectForm = new FormGroup({
    title: new FormControl<string | null>(null, [
 
    ]),
    description: new FormControl<string | null>(null, [
     
    ]),
    category: new FormControl<string | null>(null, [

    ]),
  });

  onSubmit2() {
    console.log(this.projectForm);
    this.myProjectService.addProject(
      this.projectForm.value.title!,
      this.projectForm.value.description!,
      this.projectForm.value.category!
    ).subscribe();
    
  }

}
