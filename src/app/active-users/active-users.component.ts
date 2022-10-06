import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { UsersServiceService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  activeUser: string[] = [];
  constructor(private activeService: UsersServiceService) {}
  onSetToinactive(i: number) {
    this.activeService.setToInactive(i);
  }
  ngOnInit() {
    this.activeUser = this.activeService.activeUsers;
  }
}
