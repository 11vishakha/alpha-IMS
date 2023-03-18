import { Component } from '@angular/core';
import {faTrash ,faPen ,faDownload,faAdd} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {

  trash=faTrash
  pen=faPen
  download=faDownload
  add=faAdd

}
