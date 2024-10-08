import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @Output() handleAdd = new EventEmitter<string>()

  formControl = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  onSubmit() {
    if (this.formControl.valid && this.formControl.value.name) {
      this.handleAdd.emit(this.formControl.value.name);
      this.formControl.reset();
    }
  }
}
