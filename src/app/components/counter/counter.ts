import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [
    CommonModule
  ],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select((fullStateObj:any) => {
      console.log('I am selector');
      return fullStateObj.countReducer;
    }); // selector
  }
  incrementCount() {
    const actionObj = increment();
    this.store.dispatch(actionObj);
  }
  decrementCount() {
    const actionObj = decrement();
    this.store.dispatch(actionObj);
  }
  resetCount() {
    const actionObj = reset();
    this.store.dispatch(actionObj);
  }
}
