import { Component } from '@angular/core';
import { MenuComponent } from "../../menu/menu/menu.component";
import { CommonModule } from '@angular/common';
import { Requestline } from '../requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { FormsModule } from '@angular/forms';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-requestline-create',
  imports: [MenuComponent,CommonModule,FormsModule],
  templateUrl: './requestline-create.component.html',
  styleUrl: './requestline-create.component.css'
})
export class RequestlineCreateComponent {
  requestline: Requestline = new Requestline();
  products: Product[] = [];

  constructor(
    public reqlsvc: RequestlineService,
    public prodsvc: ProductService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  save(): void {
    this.requestline.productId = +this.requestline.productId;
    this.reqlsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.log("Requestline created successfully", res);
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      error: (err) => {
        console.error("Error creating request", err);
      }
    });
  }

  ngOnInit(): void {
    var rid = this.route.snapshot.params['rid'];
    this.requestline.requestId = rid;
    this.requestline.quantity = 1;
    this.prodsvc.list().subscribe({
      next: (res) => {
        this.products = res as Product[];
        console.log("Products loaded successfully", this.products);
      },
      error: (err) => {
        console.error("Error loading products", err);
      }
    });
  }
}
