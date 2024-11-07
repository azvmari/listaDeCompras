import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TextInputComponent } from "../../components/text-input/text-input.component";
import { ItemComponent } from "../../components/item/item.component";
import { AuthService, User } from '@auth0/auth0-angular'
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TextInputComponent, ItemComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: User | undefined | null;
  list = [{ name: "Item 1", isCompleted: false }, { name: "Item 2", isCompleted: true }]

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.user = user;
      console.log(user)
    })
  }

  logout() {
    this.auth.logout()
    this.router.navigate(["/login"])
  }

  createItem(name: string) {
    this.list.push({ name, isCompleted: false })
  }

  toggleCompleted(itemIndex: number) {
    this.list = this.list.map((item, index) => {
      if (index === itemIndex) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }

      return item
    })
  }

  editItem(name: string, itemIndex: number) {
    this.list = this.list.map((item, index) => {
      if (index === itemIndex) {
        return {
          ...item,
          name
        }
      }

      return item
    })
  }

  deleteItem(itemIndex: number) {
    this.list = this.list.filter((item, index) => index !== itemIndex)
  }
}
