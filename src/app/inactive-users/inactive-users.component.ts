import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  inactiveUser: string[] = [];

  constructor(private inactiveService: UsersServiceService) {}
  onSetToactive(i: number) {
    this.inactiveService.setToActive(i);
  }
  ngOnInit() {
    this.inactiveUser = this.inactiveService.inactiveUsers;
  }
}
