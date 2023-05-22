import { Component, OnInit } from '@angular/core';
import quizzes from "../../../../assets/data/quizz_questions_array.json"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit {

  indexSelecionado:number = 0

  title:string = ""

  quizz_questions: any

  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string =""

  questionIndex:number =0
  questionMaxIndex:number=0

  finished:boolean = false

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
  ) {
    this.activeRoute.params.subscribe(
      res => this.indexSelecionado = res["id"]
    )
   }

  ngOnInit(): void {
    if (quizzes) {
      this.quizz_questions = quizzes[this.indexSelecionado]

      this.finished = false
      this.title = this.quizz_questions.title

      this.questions = this.quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

    }

  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()

  }

  async nextStep(){
    this.questionIndex+=1

    if(this.questionMaxIndex > this.questionIndex){
        this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = this.quizz_questions.results[finalAnswer as keyof typeof this.quizz_questions.results ]
    }
  }

  async checkResult(anwsers:string[]){

    const result = anwsers.reduce((previous, current, i, arr)=>{
        if(
          arr.filter(item => item === previous).length >
          arr.filter(item => item === current).length
        ){
          return previous
        }else{
          return current
        }
    })

    return result
  }

  index() {
    this.navegador.navigate(['/'])
  }

}
