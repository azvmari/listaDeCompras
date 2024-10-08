import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { TextInputComponent } from "./components/text-input/text-input.component";
import { ItemComponent } from "./components/item/item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TextInputComponent,
    ItemComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  list = [{ name: "Item 1", isCompleted: false }]

  createItem(name: string) {
    this.list.push({ name, isCompleted: false })
  }

  toggleCompleted(itemIndex: number) {
    this.list.map((item, index) => {
      if(index === itemIndex) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }

      return item
    })
  }

  editItem(name: string, itemIndex:number) {
    this.list.map((item, index) => {
      if(index === itemIndex) {
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
