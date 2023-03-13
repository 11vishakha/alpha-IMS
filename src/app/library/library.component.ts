import { Component } from '@angular/core';
import{faTrash ,faPen ,faDownload,faAdd} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  trash=faTrash
  pen=faPen
  download=faDownload
  add=faAdd


}
