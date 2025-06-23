import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { RequestService } from '../request.service';
import { MenuComponent } from "../../menu/menu/menu.component";
import { FormsModule } from '@angular/forms';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-request-create',
  imports: [MenuComponent,FormsModule,CommonModule],
  templateUrl: './request-create.component.html',
  styleUrl: './request-create.component.css'
})
export class RequestCreateComponent {

  request: Request = new Request();

  constructor(
    public syssvc: SystemService,
    public reqsvc: RequestService,
    public router: Router
  ) {}

  save(): void {
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.log("Request created successfully", res);
        this.router.navigate(['/request/list']);
      },
      error: (err) => {
        console.error("Error creating request", err);
      }
    });
  }

  ngOnInit(): void {
    this.syssvc.chkLogin();
    var user = this.syssvc.getLoggedInUser() as User;
    this.request.userId = user.id;
  }

}
