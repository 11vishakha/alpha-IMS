import { Component } from '@angular/core';
import { faDownload, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fees-collection',
  templateUrl: './fees-collection.component.html',
  styleUrls: ['./fees-collection.component.css']
})
export class FeesCollectionComponent {
  download=faDownload;
  add=faAdd;
}
