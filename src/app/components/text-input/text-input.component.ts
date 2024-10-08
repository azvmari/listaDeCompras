import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @Input() handleAdd !: (name: string) => void
  formControl = new FormControl('');  
}
