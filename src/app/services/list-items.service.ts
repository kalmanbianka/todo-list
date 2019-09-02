import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  listItems: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  addItem(item:string){
    const currentListItems = this.listItems.getValue();
    currentListItems.push(item);
    this.listItems.next(currentListItems);
  }

  deleteItem(index:number) {
    const currentListItems = this.listItems.getValue();
    currentListItems.splice(index, 1);
    this.listItems.next(currentListItems);
  }
}
