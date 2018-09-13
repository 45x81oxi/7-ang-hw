import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand = "Todo list";
  status: string;

  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(status);
    this.auth.loginAuthEvent.subscribe((res: string) => {
          this.status = res;
      });
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
