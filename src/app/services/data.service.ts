import { Question } from './../models/Question';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  questions: Question[];

  constructor() { 
    // this.questions = [
    // {
    //   text: 'What is your name?', 
    //   answer: 'My name is Tony', 
    //   hide: true
    // }, 
    // {
    //   text: 'What is your fav color?', 
    //   answer: 'It is palegoldenrod', 
    //   hide: true      
    // }
    
    // ];  
  } //constr

  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question: Question){
    this.questions.unshift(question);
    
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    }else{
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
      
    }    
  }

  removeQuestion(question){
    for (let i=0; i < this.questions.length; i++){
      if(question === this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
