import { Component } from '@angular/core';
import { faDownload, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  download=faDownload;
  add=faAdd;
}
