import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-login',
  imports: [MenuComponent,FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  username: string = '';
  password: string = '';
  message: string = ''

  constructor(
    public syssvc: SystemService,
    public usersvc: UserService,
    public router: Router
  ) {}

  login(): void {
    this.message = ''
    this.syssvc.clearLoggedInUser();
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res: any) => {
        console.log("Login successful", res);
        this.syssvc.setLoggedInUser(res);
        this.router.navigate(['/request/list']);
      },
      error: (err: any) => {
        console.error("Login failed", err);
        this.message = "Login failed. Please try again.";
      }
    });
  }

  ngOnInit(): void {
  }
}
