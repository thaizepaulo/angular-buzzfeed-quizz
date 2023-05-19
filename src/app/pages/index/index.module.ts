import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListQuizzComponent } from './list-quizz/list-quizz.component';

@NgModule({
  declarations: [
    ListQuizzComponent
  ],
  exports: [
    ListQuizzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
