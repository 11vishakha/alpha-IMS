import { Component, EventEmitter, Output } from '@angular/core';
import { faDownload, faAdd ,faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToggled= new EventEmitter<boolean>();
menuStatus:boolean=false;
search=faSearch;


SideNavToggled(){
  this.menuStatus=!this.menuStatus;
  this.sideNavToggled.emit(this.menuStatus)
}


}
