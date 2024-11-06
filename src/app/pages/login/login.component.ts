import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import login from '../../services/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  faGoogle = faGoogle

  loginWithGoogle() {
    login("google")
  }

  loginWithFacebook() {
    login("facebook")
  }
}
