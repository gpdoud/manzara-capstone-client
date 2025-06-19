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
    { display: 'Vendor', route: '/vend/list' },
    { display: 'Product', route: '/prod/list' },
    { display: 'Request', route: '/req/list' },
    { display: 'Review', route: '/rev/list' },
    { display: 'About', route: '/about' },
    { display: 'Login', route: '/login' }
  ]

  ngOnInit(): void {
  }
}
