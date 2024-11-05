import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  faGoogle = faGoogle

  formControl = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  onSubmit() {
    if (this.formControl.valid && this.formControl.value.name) {
      this.formControl.reset();
    }
  }
}
