import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from './prs/menu/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'manzara-capstone-client';
}
