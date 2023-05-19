import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { IndexModule } from './pages/index/index.module';
import { QuizzesModule } from './pages/quizzes/quizzes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    QuizzesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
