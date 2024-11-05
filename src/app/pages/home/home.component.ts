import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TextInputComponent } from "../../components/text-input/text-input.component";
import { ItemComponent } from "../../components/item/item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TextInputComponent, ItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  list = [{ name: "Item 1", isCompleted: false }, { name: "Item 2", isCompleted: true }]

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
