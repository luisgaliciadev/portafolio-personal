import { Component } from '@angular/core';
import {DataPageService} from './services/data-page.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio-luisgalicia';

  constructor(
    public _DataPageService: DataPageService
  ) {
  }

  onActivate(event) {
    window.scroll(0,0);
  }
}


