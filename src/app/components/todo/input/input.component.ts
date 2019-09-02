import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListItemsService } from 'src/app/services/list-items.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @ViewChild('inputElement', {static:true}) inputElement: ElementRef;
  constructor(private listItemsService: ListItemsService) { }

  ngOnInit() {
  }

  onAddItem(){
    const value = this.inputElement.nativeElement.value;
    console.log(value);
    this.listItemsService.addItem(value);
  }

}
