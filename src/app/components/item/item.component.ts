import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatIconModule, NgClass, NgIf, ReactiveFormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() name!: string
  @Input() checked!:boolean
  @Output() handleDelete = new EventEmitter()
  @Output() handleSave = new EventEmitter<string>()
  @Output() toggleComplete = new EventEmitter()

  editing = false

  formControl = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      this.formControl.setValue({ name: this.name })
    }
  }

  handleToggle() {
    this.toggleComplete.emit()
  }

  onEdit() {
    this.editing = true
  }

  onSave() {
    if (this.formControl.value.name) {
      this.handleSave.emit(this.formControl.value.name)
    }

    this.editing = false
  }

  onDelete() {
    this.handleDelete.emit()
  }
}
