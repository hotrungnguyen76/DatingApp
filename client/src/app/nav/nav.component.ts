import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Observable, of } from 'rxjs';
import { User } from '../_models/User';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) { } // Inject Service

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
       console.log(err);
      },
    })
  }

  logout(){
    this.accountService.logout();
  }
}
