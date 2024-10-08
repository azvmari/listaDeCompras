import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() name!: string
  @Output() handleDelete = new EventEmitter()

  onDelete() {
    this.handleDelete.emit()
  }
}
