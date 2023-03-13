import { Component } from '@angular/core';
import {faDownload,faAdd,faPen,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons'
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

}
