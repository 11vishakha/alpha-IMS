import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

constructor(private ele :StudentService){}
 
postData(){
  this.ele.RegisterStudent(this.register.value).subscribe((res)=>console.log(res))
}

  register=new FormGroup({
    'firstName':new FormControl(),
    'lastName':new FormControl(),
    'dob':new FormControl(),
    'passingYear':new FormControl(),
    'email':new FormControl(),
    'education':new FormControl(),
    'mobile':new FormControl(),
    'course':new FormControl(),
    'address':new FormControl(),
    'gender':new FormControl()
  })


}
