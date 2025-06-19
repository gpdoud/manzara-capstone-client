import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from "../../prs/menu/menu/menu.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MenuComponent]
})
export class HomeComponent {
  name: string = 'Greg';
}
