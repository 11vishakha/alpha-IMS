import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  constructor(private ele:StudentService, private route:ActivatedRoute){
    route.params.subscribe((param)=>this.variable=param)
    this.editStudent()
  }
  variable:any;





  edit=new FormGroup({
    'id':new FormControl(),
    'firstName':new FormControl(),
    'lastName':new FormControl(),
    'mobile':new FormControl(),
    'passingYear':new FormControl(),
    'dob':new FormControl(),
    'course':new FormControl(),
    'email':new FormControl(),
    'gender':new FormControl(),
    'education':new FormControl(),
    'address':new FormControl(),
    'studentId':new FormControl(),
    'password':new FormControl(),
    'tempPassword':new FormControl(),
    'mentorId':new FormControl(),
    'mentorOpted':new FormControl(),
    'updateOn':new FormControl(),
    'createdOn':new FormControl()
  })

  editStudent(){
    this.ele.getStudentById(this.variable.id).subscribe((res:any)=>this.edit.setValue(res))
  }
}
