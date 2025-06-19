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
    { display: 'User', route: '/userList' },
    { display: 'Vendor', route: '/vendList' },
    { display: 'Product', route: '/prodList' },
    { display: 'Request', route: '/reqList' },
    { display: 'Review', route: '/revList' },
    { display: 'About', route: '/about' },
    { display: 'Login', route: '/login' }
  ]

  ngOnInit(): void {
  }
}
