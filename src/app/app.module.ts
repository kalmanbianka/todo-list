import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { InputComponent } from './components/todo/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
