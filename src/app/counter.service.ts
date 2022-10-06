import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  countAvtiveToInac: number = 0;
  countIncToA: number = 0;
  incrementInactiveToActive() {
    this.countIncToA++;
  }
  incrementActiveToInactive() {
    this.countAvtiveToInac++;
  }

  constructor() {}
}
