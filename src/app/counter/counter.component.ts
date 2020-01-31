import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  // tslint:disable-next-line: max-line-length
  template: '<button  type="button" (click) = decriment() > -ve </button> {{counterValue}} <button  (click) = incriment()> +ve </button>,<button (click)="counterChanged()">Click me</button>',
  styles: ['']
})
export class CounterComponent implements OnInit {
  @Input() counterValue = 0 ;
  @Output() counterChange = new EventEmitter();


counterChanged(){

  this.counterChange.emit(this.counterValue);
}
  constructor(){}


  ngOnInit() {

  }
  incriment(){
    this.counterValue++;

 }
 decriment(){
   this.counterValue--;
 }


}
