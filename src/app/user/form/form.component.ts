import { ViewEncapsulation } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormComponent implements OnInit {
  tableName: string = '';
  tableEmail: string = '';
  tableContent: string = '';

  @Output() tableAdded = new EventEmitter<{ name: string, email: string, content: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  addtable() {
    this.tableAdded.emit({ name: this.tableName, email: this.tableEmail, content: this.tableContent })
    this.tableName= ''
    this.tableEmail= ''
    this.tableContent= ''
  }
}
