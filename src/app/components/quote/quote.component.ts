import { Component, OnInit } from '@angular/core';
import { Quote } from "../.././quote"
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Annette", "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.","Helen Keller", new Date(2019,5,2), 0),
    new Quote("Annette", "Do not go where the path may lead, go instead where there is no path and leave a trail.","Ralph Waldo Emerson", new Date(2019,5,3), 0),
    new Quote("Annette", "Tell me and I forget. Teach me and I remember. Involve me and I learn.","Benjamin Franklin", new Date(2019,5,2), 0),
  ]
  addNewQuote(quote){
    this.quotes.unshift(quote);
  }
  showUserForm:boolean = false;
  addQuote(isAdd, index){
    if(isAdd){
      this.quotes[index].like+=1;
    }
  }
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete= confirm(`Do you want to delete?`)
      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  constructor() { }
  ngOnInit() {
  }
}
