import { Component } from '@angular/core';

@Component({
  selector: 're-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  bookCategory: string[] = [
    '诗', '书', '传', '家', '久'
  ];

  constructor() {
  }

}
