// app.component.ts
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-day-2';
  tables: { name: string, email: string, content: string }[] = [];

  removeTable(index: number) {
    this.tables.splice(index, 1);
    console.log(index);
  }

  addtable(tableData: {name: string; email: string; content: string}) {
    this.tables.push({ name: tableData.name, email: tableData.email, content: tableData.content });
  }
}