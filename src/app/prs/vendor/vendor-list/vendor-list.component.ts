import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  imports: [MenuComponent, RouterLink],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent {

  vendors: any[] = [];

  constructor(
    private vendorsvc: VendorService
  ) {}

  viewVendor(vendor: Vendor): void {

  }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe({
      next: (res) => {
        this.vendors = res;
        console.log(this.vendors);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
