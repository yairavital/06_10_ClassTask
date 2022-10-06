import { Injectable } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  constructor(private counter: CounterService) {}
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  setToActive(id: number) {
    let temp = this.inactiveUsers.splice(id, 1);
    this.activeUsers.push(temp[0]);
    this.counter.incrementInactiveToActive();
  }
  setToInactive(id: number) {
    let temp = this.activeUsers.splice(id, 1);
    this.inactiveUsers.push(temp[0]);
    this.counter.incrementActiveToInactive();
  }
}
