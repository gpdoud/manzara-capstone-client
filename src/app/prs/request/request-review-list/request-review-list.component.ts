import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { MenuComponent } from "../../menu/menu/menu.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-request-review-list',
  imports: [MenuComponent,CommonModule,RouterLink],
  templateUrl: './request-review-list.component.html',
  styleUrl: './request-review-list.component.css'
})
export class RequestReviewListComponent {

  requests: Request[] = [];

  constructor(
    private reqsvc: RequestService
  ) {}

  ngOnInit(): void {
    this.reqsvc.reviews(1).subscribe({
      next: (res) => {
        this.requests = res;
        console.log(this.requests);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
