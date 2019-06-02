import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from "../.././quote"
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 @Input() quote:Quote;
 @Output() isComplete = new EventEmitter<boolean>();
 @Output() isAdd = new EventEmitter<boolean>();

 quoteAdd(add:boolean){
   this.isAdd.emit(add);
 }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }




  constructor() { }
  ngOnInit() {
  }

}
