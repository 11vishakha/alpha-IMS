import { Component } from '@angular/core';
import {  faDownload,faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {

download = faDownload;
add=faAdd;
pen=faPen;
trash=faTrash;

}
