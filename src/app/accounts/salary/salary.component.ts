import { Component } from '@angular/core';
import { faDownload, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
  download=faDownload;
  add=faAdd;
}
