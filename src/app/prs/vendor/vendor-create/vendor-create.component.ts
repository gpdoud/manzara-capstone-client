import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "../../menu/menu/menu.component";

@Component({
  selector: 'app-vendor-create',
  imports: [FormsModule, MenuComponent],
  templateUrl: './vendor-create.component.html',
  styleUrl: './vendor-create.component.css'
})
export class VendorCreateComponent {

  vendor: Vendor = new Vendor();

  constructor(
    public vendsvc: VendorService,
    public router: Router
  ) {}

  save(): void {
    this.vendsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.log("Vendor created successfully", res);
        this.router.navigate(['/vendor/list']);
      },
      error: (err) => {
        console.error("Error creating vendor", err);
      }
    });
  }

  ngOnInit(): void {
  }
}
