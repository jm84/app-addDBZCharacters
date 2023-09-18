import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <h4>counter: {{ counter }}</h4>
    <hr />
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <hr />
    <button (click)="counterReset()">Reset</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number) {
    if (value == 1) {
      this.counter += 1;
    } else {
      this.counter -= 1;
    }
  }

  counterReset() {
    this.counter = 10;
  }
}
