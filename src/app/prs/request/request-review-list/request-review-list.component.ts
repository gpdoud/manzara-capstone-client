import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { MenuComponent } from "../../menu/menu/menu.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-review-list',
  imports: [MenuComponent,CommonModule,RouterLink],
  templateUrl: './request-review-list.component.html',
  styleUrl: './request-review-list.component.css'
})
export class RequestReviewListComponent {

  requests: Request[] = [];

  constructor(
    private syssvc: SystemService,
    private reqsvc: RequestService
  ) {}

  ngOnInit(): void {
    this.syssvc.chkLogin();
    var user = this.syssvc.getLoggedInUser() as User;

    this.reqsvc.reviews(user.id).subscribe({
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
