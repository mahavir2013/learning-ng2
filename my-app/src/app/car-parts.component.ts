import { Component } from '@angular/core';

import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent {
  carParts: CarPart[];

  constructor(private racingDataService: RacingDataService) {}

  ngOnInit() {
    this.racingDataService.getCarParts()
        .subscribe(carParts => this.carParts = carParts);
  }

  totalCarParts() {
    let sum = 0;
    if (Array.isArray(this.carParts)) {
      sum = this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    }
    return sum;
  }

  upQuentity(carPart, isDecrease) {
    isDecrease ? (carPart.quantity !== 0 && carPart.quantity--) : (carPart.quantity < carPart.inStock && carPart.quantity++);
  }
}
