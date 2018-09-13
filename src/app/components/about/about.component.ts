import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  arr: any = [5, 8, 19, 1258, -665];
  today: string | number | Date;

  constructor() {
  }

  ngOnInit() {
    this.today = new Date();
  }
}
