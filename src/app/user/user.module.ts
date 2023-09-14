import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [
    TableComponent,
    NavComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BindingModule { }
