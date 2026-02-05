import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
  cars = ['Tata', 'Honda'];
  addNewCar(newCar: string) {
    this.cars.push(newCar)
  }


  add(a: any, b: any) {
    return a + b;
  }

  sumOfDigits(num: any) {
    let sum = 0;
    while (num != 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

}
