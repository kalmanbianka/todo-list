import { Component, OnInit } from '@angular/core';
import { ListItemsService } from 'src/app/services/list-items.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  currentListItems: string[] = [];
  constructor(private listItemService: ListItemsService) { }

  ngOnInit() {
    this.listItemService.listItems.subscribe((value)=> {
      this.currentListItems = value;
    })
  }

}
