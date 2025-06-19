import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  providers: [UserService],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
  imports: [MenuComponent, FormsModule]
})
export class UserCreateComponent {

  user: User = new User();

  constructor(
    public usersvc: UserService,
    public router: Router
  ) {}

  save(): void {
    this.usersvc.create(this.user).subscribe({
      next: (res) => {
        console.log("User created successfully", res);
        this.router.navigate(['/user/list']);
      },
      error: (err) => {
        console.error("Error creating user", err);
      }
    });
  }

  ngOnInit(): void {
  }
}
