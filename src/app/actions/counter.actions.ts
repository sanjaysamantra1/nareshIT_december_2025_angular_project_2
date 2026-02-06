import { createAction } from "@ngrx/store";

export const increment = createAction('Counter App Increment Action');
export const decrement = createAction('Counter App Decrement Action');
export const reset = createAction('Counter App Reset Action');
