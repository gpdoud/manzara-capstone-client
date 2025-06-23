import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-requestline-change',
  imports: [MenuComponent,FormsModule,],
  templateUrl: './requestline-change.component.html',
  styleUrl: './requestline-change.component.css'
})
export class RequestlineChangeComponent {

    requestline: Requestline = new Requestline();
    products: Product[] = []

  constructor(
    public reqlsvc: RequestlineService,
    public prodsvc: ProductService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  save(): void {
    this.reqlsvc.change(this.requestline).subscribe({
      next: (res) => {
        console.log("Requestline changed successfully", res);
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);

      },
      error: (err) => {
        console.error("Error changing product", err);
      }
    });
  }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error("Error retrieving products", err);
      }
    });
    var id = this.route.snapshot.params['id'];
    this.reqlsvc.get(id).subscribe({
      next: (res) => {
        this.requestline = res;
      },
      error: (err) => {
        console.error("Error retrieving product", err);
      }
    });
  }

}
