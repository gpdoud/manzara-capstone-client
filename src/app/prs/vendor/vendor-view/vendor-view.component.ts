import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-view',
  imports: [MenuComponent, FormsModule],
  templateUrl: './vendor-view.component.html',
  styleUrl: './vendor-view.component.css'
})
export class VendorViewComponent {

  vendor: Vendor = new Vendor();

  constructor(
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.vendsvc.remove(this.vendor.id).subscribe({
      next: (res: any) => {
        console.log("Vendor deleted successfully", res);
        this.router.navigate(['/vendor/list']);
      },
      error: (err: any) => {
        console.error("Error deleting vendor", err);
      }
    });
  }

  

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.vendsvc.get(id).subscribe({
      next: (vendor: Vendor) => {
        this.vendor = vendor;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}
