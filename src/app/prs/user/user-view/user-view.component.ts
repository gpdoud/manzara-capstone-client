import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css',
  imports: [FormsModule, MenuComponent]
})
export class UserViewComponent {

  user: User = new User();

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.usersvc.remove(this.user.id).subscribe({
      next: (res: any) => {
        console.log("User deleted successfully", res);
        this.router.navigate(['/user/list']);
      },
      error: (err: any) => {
        console.error("Error deleting user", err);
      }
    });
  }

  

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.usersvc.get(id).subscribe({
      next: (user: User) => {
        this.user = user;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

}
