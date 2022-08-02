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
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    category: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  onSubmit2() {
    console.log(this.projectForm);

    // this.myProjectService.addProject(
    //   title:this.projectForm.value.title,
    //   description:this.projectForm.value.description!,
    //   category:this.projectForm.value.category!
    // );

    
    
  }

}
