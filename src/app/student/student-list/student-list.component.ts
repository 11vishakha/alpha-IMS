import { Component } from '@angular/core';
import {faDownload,faAdd,faPen,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons'
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
download=faDownload;
add=faAdd;
pen=faPen;
trash=faTrash;
plus=faPlus

constructor(private ele:StudentService){
  this.getStudent();
}
list:any;
 getStudent(){
  this.ele.getAllStudent().subscribe((res)=>console.log(this.list=res))
 }
 delete(id:number){
  this.ele.deleteStudent(id).subscribe((res)=>console.log(res))
 }
}
