import { Component } from '@angular/core';
import { Car } from 'libs/interfaces/car';

@Component({
  selector: 'jurgen-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cars';
  cars: Car[] = [
    {
      name: 'bmw',
      model: '2020',
      price: 55,
    },
    {
      name: 'toyota',
      model: '2022',
      price: 545,
    },
    {
      name: 'fiat',
      model: '3030',
      price: 585,
    },
    {
      name: 'caro',
      model: '3052',
      price: 5514,
    },
  ];
}
