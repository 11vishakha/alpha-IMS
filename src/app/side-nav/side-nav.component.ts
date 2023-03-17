import { Component, Input } from '@angular/core';
import {  faUserGraduate,faChalkboardTeacher, faBuilding, faBookReader,faFileInvoiceDollar,faShieldAlt , faThLarge } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() sideNavStatus:boolean=false;

  usergraduate=faUserGraduate;
  fachalk=faChalkboardTeacher;
  fabuilding= faBuilding;
  fabookreader = faBookReader;
  fafile = faFileInvoiceDollar;
  fashield = faShieldAlt;
  fathlarge = faThLarge;


}
// @Input() sideNavStatus:boolean=false;