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
  @Input() title!: string
  @Input() checked!:boolean
  @Output() handleDelete = new EventEmitter()
  @Output() handleSave = new EventEmitter<string>()
  @Output() toggleComplete = new EventEmitter()

  editing = false

  formControl = new FormGroup({
    title: new FormControl('', Validators.required)
  })

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      this.formControl.setValue({ title: this.title })
    }
  }

  handleToggle() {
    this.toggleComplete.emit()
  }

  onEdit() {
    this.editing = true
  }

  onSave() {
    if (this.formControl.value.title) {
      this.handleSave.emit(this.formControl.value.title)
    }

    this.editing = false
  }

  onDelete() {
    this.handleDelete.emit()
  }
}
