import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Request } from '../request.class';import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../vendor/vendor.service';
import { RequestService } from '../request.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-request-change',
  imports: [MenuComponent,FormsModule, CommonModule],
  templateUrl: './request-change.component.html',
  styleUrl: './request-change.component.css'
})
export class RequestChangeComponent {

    request: Request = new Request();

  constructor(
    public reqsvc: RequestService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  save(): void {
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.log("Request changed successfully", res);
        this.router.navigate(['/request/list']);
      },
      error: (err) => {
        console.error("Error changing product", err);
      }
    });
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        this.request = res;
      },
      error: (err) => {
        console.error("Error retrieving product", err);
      }
    });
  }


}
