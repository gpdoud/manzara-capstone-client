import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Request } from '../request.class';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RequestService } from '../request.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { Requestline } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';

@Component({
  selector: 'app-request-lines',
  imports: [CommonModule, RouterLink, MenuComponent],
  templateUrl: './request-lines.component.html',
  styleUrl: './request-lines.component.css'
})
export class RequestLinesComponent {
  request: Request = new Request();

  constructor(
    private reqsvc: RequestService,
    private reqlsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  review(): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res: Request) => {
        console.log('Request reviewed successfully', res);
        this.refresh();
      },
      error: (err: any) => {
        console.error('Error reviewing request', err);
      }
    });
  }

  edit(id: number): void {
    this.router.navigate(['/requestline/change', id]);
  }

  create(rid: number): void {
    this.router.navigate(['/requestline/create', rid]);
  }

  remove(requestline: Requestline): void {
    this.reqlsvc.remove(requestline.id).subscribe({
      next: (res: any) => {
        this.refresh();
      },
      error: (err: any) => {;
      }
    });
  }

  refresh(): void {
    const id = this.route.snapshot.params['id'];
    this.reqsvc.get(id).subscribe({
      next: (request: Request) => {
        this.request = request;
      },
      error: (err: any) => {
        console.error('Error loading request', err);
      }
    });
  }

  ngOnInit(): void {
    this.refresh();
  } 

}