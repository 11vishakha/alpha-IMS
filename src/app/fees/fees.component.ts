import { Component } from '@angular/core';
import {  faDownload,faAdd, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent {

  download = faDownload;
  add=faAdd;
  pen=faPen;
  trash=faTrash;


}
