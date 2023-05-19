import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../../assets/data/quizz_questions_array.json"
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-quizz',
  templateUrl: './list-quizz.component.html',
  styleUrls: ['./list-quizz.component.css']
})

export class ListQuizzComponent implements OnInit {

  quizzes:any;

  constructor(
    private navegador: Router
  ) { }

  ngOnInit(): void {
    if(quizz_questions){
      this.quizzes = quizz_questions;
    }
  }

  quizz() {
    this.navegador.navigate(['/quizz'])
  }

}
