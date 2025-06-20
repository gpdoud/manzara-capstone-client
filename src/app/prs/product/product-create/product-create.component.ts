import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  imports: [MenuComponent,FormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(
    public prodsvc: ProductService,
    public vendsvc: VendorService,
    public router: Router
  ) {}

  save(): void {
    this.prodsvc.create(this.product).subscribe({
      next: (res) => {
        console.log("Product created successfully", res);
        this.router.navigate(['/product/list']);
      },
      error: (err) => {
        console.error("Error creating product", err);
      }
    });
  }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        this.vendors = res;
      },
      error: (err) => {
        console.error("Error loading vendors", err);
      }
    });
  }
}
