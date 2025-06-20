import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [MenuComponent,FormsModule,RouterLink,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(
    private prodsvc: ProductService
  ) {}

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        this.products = res;
        console.log(this.products);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
