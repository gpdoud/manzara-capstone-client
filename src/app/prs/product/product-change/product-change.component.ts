import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-change',
  imports: [MenuComponent,FormsModule],
  templateUrl: './product-change.component.html',
  styleUrl: './product-change.component.css'
})
export class ProductChangeComponent {

    product: Product = new Product();
    vendors: Vendor[] = []

  constructor(
    public prodsvc: ProductService,
    public vendsvc: VendorService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  save(): void {
    this.prodsvc.change(this.product).subscribe({
      next: (res) => {
        console.log("Product changed successfully", res);
        this.router.navigate(['/product/list']);
      },
      error: (err) => {
        console.error("Error changing product", err);
      }
    });
  }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        this.vendors = res;
      },
      error: (err) => {
        console.error("Error retrieving vendors", err);
      }
    });
    var id = this.route.snapshot.params['id'];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (err) => {
        console.error("Error retrieving product", err);
      }
    });
  }

}
