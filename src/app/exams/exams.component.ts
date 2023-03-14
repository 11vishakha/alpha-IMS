import { Component } from '@angular/core';
import { faAdd, faDownload, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {
  download=faDownload;
  add=faAdd;
  pen=faPen;
  trash=faTrash;
  plus=faPlus
}
