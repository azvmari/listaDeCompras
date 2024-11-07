import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ShoppingItem } from "../@types/ShoppingItem";
import { v4 as uuidv4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonURL = "db.json"

  constructor(private http: HttpClient) { }

  getData(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.jsonURL)
  }

  createItem(data: { title: string, userEmail: string }){
    const newItem: ShoppingItem = {
      id: uuidv4(),
      concluded: false,
      title: data.title,
      userEmail: data.userEmail
    }

    this.http.post(this.jsonURL, newItem) as Observable<ShoppingItem[]>

    return newItem
  }

  updateItem(data: ShoppingItem) {
    return this.http.put(`${this.jsonURL}/${data.id}`, data) as Observable<ShoppingItem[]>
  }
}