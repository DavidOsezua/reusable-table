import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() tableData: any[] = [];
  @Input() columnData: string[] = [];

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  editData(item: any): void {
    debugger;
    this.onEdit.emit(item);
  }

  deleteData(item: any): void {
    debugger;
    this.onDelete.emit(item);
  }
}
