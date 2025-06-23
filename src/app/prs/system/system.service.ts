import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User | null = null;
  
  constructor(
    public router: Router
  ) { }

  setLoggedInUser(user: User): void {
    this.loggedInUser = user;
    console.debug("Logged in user set:", this.loggedInUser);
  }
  clearLoggedInUser(): void {
    console.debug("Logged in user cleared:");
    this.loggedInUser = null;
  }
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  chkLogin(): void {
    if (this.loggedInUser === null) {
      this.router.navigate(['/user/login']);
    }
  }

}
