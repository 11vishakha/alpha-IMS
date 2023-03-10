import { Component } from '@angular/core';
import{faTrash ,faPen ,faDownload,faAdd} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  trash=faTrash
  pen=faPen
  download=faDownload
  add=faAdd


}
