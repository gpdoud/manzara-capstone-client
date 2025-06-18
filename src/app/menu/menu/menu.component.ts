import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menus = [
    { display: 'Home', route: '/home' },
    { display: 'User', route: '/userlist' },
    { display: 'Vendor', route: '/vendlist' },
    { display: 'Product', route: '/prodlist' },
    { display: 'Request', route: '/reqlist' },
    { display: 'Review', route: '/revlist' },
    { display: 'About', route: '/about' },
    { display: 'Login', route: '/login' }
  ]

  ngOnInit(): void {
  }
}
