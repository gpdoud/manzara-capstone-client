import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "../../menu/menu/menu.component";

@Component({
  selector: 'app-user-change',
  imports: [FormsModule, MenuComponent],
  templateUrl: './user-change.component.html',
  styleUrl: './user-change.component.css'
})
export class UserChangeComponent {

  user: User = new User();

  constructor(
    public usersvc: UserService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  save(): void {
    this.usersvc.change(this.user).subscribe({
      next: (res) => {
        console.log("User changed successfully", res);
        this.router.navigate(['/user/list']);
      },
      error: (err) => {
        console.error("Error changing user", err);
      }
    });
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.usersvc.get(id).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.error("Error retrieving user", err);
      }
    });
  }
}
