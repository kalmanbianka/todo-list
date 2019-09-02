import { Component, OnInit, Input } from '@angular/core';
import { ListItemsService } from 'src/app/services/list-items.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item:string = '';
  @Input() arrayIndex: number = 0;
  constructor(private listItemService: ListItemsService) { }

  ngOnInit() {
  }

  onDeleteItem(){
    this.listItemService.deleteItem(this.arrayIndex);
  }
}
