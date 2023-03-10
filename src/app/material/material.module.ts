import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatFormFieldModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const materialComponents=[
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  FontAwesomeModule
 


]



@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports:[
    materialComponents
  ]
})
export class MaterialModule { }
