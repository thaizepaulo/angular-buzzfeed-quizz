import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from './quizz/quizz.component';

@NgModule({
  declarations: [
    QuizzComponent
  ],
  exports: [
    QuizzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizzesModule { }
