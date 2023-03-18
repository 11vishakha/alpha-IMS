import { Component } from '@angular/core';
import {  faDownload,faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent{

  download = faDownload;
  add=faAdd;
  pen=faPen;
  trash=faTrash;

}
