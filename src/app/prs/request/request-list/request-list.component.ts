import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../request.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  imports: [MenuComponent,FormsModule,RouterLink,CommonModule],
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.css'
})
export class RequestListComponent {
  requests: Request[] = [];
request: any;

  constructor(
    private reqsvc: RequestService
  ) {}

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
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
