import { Component } from '@angular/core';
import {  faDownload,faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent {

  download = faDownload;
  add=faAdd;
  pen=faPen;
  trash=faTrash;

}
