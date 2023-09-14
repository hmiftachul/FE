// table.component.ts
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class TableComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() content: string = '';
  @Output() tableRemoved = new EventEmitter<number>();


  removeTable() {
    this.tableRemoved.emit();
  }



  // contohTabel(event: any) {
  //   const status = event.target.value;
  //   this.dataTable.emit({   })
  // }
}