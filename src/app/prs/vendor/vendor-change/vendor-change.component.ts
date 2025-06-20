import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "../../menu/menu/menu.component";

@Component({
  selector: 'app-vendor-change',
  imports: [FormsModule, MenuComponent],
  templateUrl: './vendor-change.component.html',
  styleUrl: './vendor-change.component.css'
})
export class VendorChangeComponent {
  vendor: Vendor = new Vendor();

  constructor(
    public vendsvc: VendorService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  save(): void {
    this.vendsvc.change(this.vendor).subscribe({
      next: (res) => {
        console.log("Vendor changed successfully", res);
        this.router.navigate(['/vendor/list']);
      },
      error: (err) => {
        console.error("Error changing vendor", err);
      }
    });
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.vendsvc.get(id).subscribe({
      next: (res) => {
        this.vendor = res;
      },
      error: (err) => {
        console.error("Error retrieving vendor", err);
      }
    });
  }

}
