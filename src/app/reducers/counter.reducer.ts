import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../actions/counter.actions";

let count = 0;
export const countReducer = createReducer(count,
  on(increment, (state: number) => {
    console.log('i am reducer');
    return state + 1;
  }),
  on(decrement, (state: number) => state - 1),
  on(reset, (state: number) => 0),
)
