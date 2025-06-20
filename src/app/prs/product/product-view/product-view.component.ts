import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';

@Component({
  selector: 'app-product-view',
  imports: [MenuComponent,FormsModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  product: Product = new Product();

  constructor(
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.prodsvc.remove(this.product.id).subscribe({
      next: (res: any) => {
        console.log("Product deleted successfully", res);
        this.router.navigate(['/product/list']);
      },
      error: (err: any) => {
        console.error("Error deleting product", err);
      }
    });
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.prodsvc.get(id).subscribe({
      next: (product: Product) => {
        this.product = product;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

}
