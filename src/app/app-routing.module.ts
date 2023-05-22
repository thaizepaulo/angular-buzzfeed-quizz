import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListQuizzComponent } from './pages/index/list-quizz/list-quizz.component';
import { QuizzComponent } from './pages/quizzes/quizz/quizz.component';

const routes: Routes = [
  {path: '', component: ListQuizzComponent, pathMatch: 'full'},
  {path: 'quizz/:id', component: QuizzComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
