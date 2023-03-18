import { Component, EventEmitter, Output } from '@angular/core';
import { faDownload, faAdd ,faSearch , faBars , faAlignRight , faBell} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//   @Output() sideNavToggled= new EventEmitter<boolean>();
// menuStatus:boolean=false;
search=faSearch;
bar = faBars;
faright = faAlignRight;
bell = faBell;






// SideNavToggled(){
//   this.menuStatus=!this.menuStatus;
//   this.sideNavToggled.emit(this.menuStatus)
// }


// @Output() navbarToggle = new EventEmitter<boolean>();
//   menuStatus:boolean = false;

//   navbar(){
//     this.menuStatus = !this.menuStatus;
//     this.navbarToggle.emit(this.menuStatus);
//   }

@Output() sideNavToggled = new EventEmitter <boolean>();
menuStatus : boolean = false;

SideNavToggled(){
  this.menuStatus = !this.menuStatus;
  this.sideNavToggled.emit(this.menuStatus)
}


}
