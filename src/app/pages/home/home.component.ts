import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TextInputComponent } from "../../components/text-input/text-input.component";
import { ItemComponent } from "../../components/item/item.component";
import { AuthService, User } from '@auth0/auth0-angular'
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ShoppingItem } from '../../@types/ShoppingItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TextInputComponent, ItemComponent, AsyncPipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: User | undefined | null;
  list: ShoppingItem[] = []

  constructor(
    public auth: AuthService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })

    this.dataService.getData().subscribe(data => {
      this.list = data.filter(item => item.userEmail === this.user?.email)
    })
  }

  logout() {
    this.auth.logout()
    this.router.navigate(["/login"])
  }

  createItem(title: string) {
    if (!this.user?.email) return

    const createdItem = this.dataService.createItem({
      title, userEmail: this.user.email
    })

    this.list.push(createdItem)
  }

  toggleCompleted(id: string) {
    this.list = this.list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          concluded: !item.concluded
        }
      }

      return item
    })
  }

  editItem(title: string, id: string) {
    this.dataService.updateItem({ 
      id: "1", 
      title, 
      concluded: false, 
      userEmail: this.user?.email || "" 
    })
  }

  deleteItem(id: string) {
    this.list = this.list.filter((item) => item.id !== id)
  }
}
