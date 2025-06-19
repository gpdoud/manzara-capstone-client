import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: any[] = [];

  constructor(
    private usersvc: UserService
  ) {}

  viewUser(user: User): void {
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) => {
        this.users = res;
        console.log(this.users);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
