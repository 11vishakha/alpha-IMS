import { Component } from '@angular/core';
import {  faDownload,faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent {
  download = faDownload;
  add=faAdd;
  pen=faPen;
  trash=faTrash;

}
