import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteEmployee, fetchEmployees } from '../../actions/employee.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [
    CommonModule
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeArr$: Observable<any>;

  constructor(private store: Store) {
    this.employeeArr$ = this.store.select((state: any) => {
      console.log('new data received')
      return state.employeesReducer;
    });
  }

  fetchEmployeeData() {
    this.store.dispatch(fetchEmployees());
  }
  deleteEmployeeData(id: any) {
    this.store.dispatch(deleteEmployee({ id }))
  }
}
