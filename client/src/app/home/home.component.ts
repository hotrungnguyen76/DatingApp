import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  registerMode: boolean = false;
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(): void {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: res => this.users = res,
      error: error => console.log(error),
      complete: () => console.log("This request completed")
    });
  }
  

}
