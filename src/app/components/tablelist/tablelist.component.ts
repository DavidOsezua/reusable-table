import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-tablelist',
  imports: [CommonModule],
  templateUrl: './tablelist.component.html',
  styleUrl: './tablelist.component.css',
})
export class TablelistComponent {
  @Input() listData: any = {};
  @Input() index: any = '';
  @Input() action: boolean = false;
}
