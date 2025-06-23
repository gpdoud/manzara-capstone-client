import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { MenuComponent } from "../../menu/menu/menu.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-review-item',
  imports: [MenuComponent,CommonModule,FormsModule],
  templateUrl: './request-review-item.component.html',
  styleUrl: './request-review-item.component.css'
})
export class RequestReviewItemComponent {

  statuscolor: string = "";;
  statusApproved: string = "text-success";
  statusRejected: string = "text-danger";
  statusReview: string = "";
  disabled: boolean = true;

  request: Request = {} as Request;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  review(): void {
    this.request.rejectionReason = "";
    this.reqsvc.review(this.request).subscribe({
      next: (res: any) => {
        console.log('Request review successfully', res);
        this.refresh();
      },
      error: (err: any) => {
        console.error('Error reviewing request', err);
      },
    });
  }
  
  approve(): void {
    this.request.rejectionReason = "";
    this.reqsvc.approve(this.request).subscribe({
      next: (res: any) => {
        console.log('Request approved successfully', res);
        this.refresh();
      },
      error: (err: any) => {
        console.error('Error approving request', err);
      },
    });
  }
  
  reject(): void {
    this.reqsvc.reject(this.request).subscribe({
      next: (res: any) => {
        console.log('Request rejected successfully', res);
        this.refresh();
      },
      error: (err: any) => {
        console.error('Error rejecting request', err);
      },
    });
  }

  refresh(): void {
    var id = this.route.snapshot.params['id'];
    this.reqsvc.get(id).subscribe({
      next: (request: Request) => {
        this.request = request;
        if(this.request.status === "REVIEW") {
          this.statuscolor = this.statusReview;
        } else if(this.request.status === "APPROVED") {
          this.statuscolor = this.statusApproved;
        } if(this.request.status === "REJECTED") {
          this.statuscolor = this.statusRejected;
        }
      this.disabled = true;
      if(this.request.rejectionReason != null && this.request.rejectionReason?.length > 0) {
          this.disabled = false;
        }
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

}
