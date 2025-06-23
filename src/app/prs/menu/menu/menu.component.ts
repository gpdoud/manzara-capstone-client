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
    { display: 'User', route: '/user/list' },
    { display: 'Vendor', route: '/vendor/list' },
    { display: 'Product', route: '/product/list' },
    { display: 'Request', route: '/request/list' },
    { display: 'Review', route: '/request/review/list' },
    { display: 'About', route: '/about' },
    { display: 'Login', route: '/user/login' }
  ]

  ngOnInit(): void {
  }
}
