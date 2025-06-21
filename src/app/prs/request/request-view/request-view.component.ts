import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { MenuComponent } from '../../menu/menu/menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-view',
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './request-view.component.html',
  styleUrl: './request-view.component.css',
})
export class RequestViewComponent {
  request: Request = new Request();

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  remove(): void {
    this.reqsvc.remove(this.request.id).subscribe({
      next: (res: any) => {
        console.log('Request deleted successfully', res);
        this.router.navigate(['/request/list']);
      },
      error: (err: any) => {
        console.error('Error deleting request', err);
      },
    });
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.reqsvc.get(id).subscribe({
      next: (request: Request) => {
        this.request = request;
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
