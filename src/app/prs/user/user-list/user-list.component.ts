import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { MenuComponent } from "../../menu/menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [MenuComponent, RouterLink],
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
