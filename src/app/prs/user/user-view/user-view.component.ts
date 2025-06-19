import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.userService.get(id).subscribe({
      next: (user: User) => {
        this.user = user;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

}
