import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  faGoogle = faGoogle

  constructor(private auth: AuthService) { }

  loginWithGoogle() {
    this.auth.loginWithRedirect()
  }

  loginWithFacebook() {
    this.auth.loginWithPopup()
  }
}
