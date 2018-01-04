import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.scss']
})
export class UserAllComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: IUser[] = [];

  loadUsers(): void {
    this.userService.getAllUsers()
      .subscribe(users => {
        this.users = users;
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.loadUsers();
  }

}
