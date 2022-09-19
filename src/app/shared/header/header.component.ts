import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/services/data-page.service';
import { PageInfo, PageInfoClass} from 'src/app/interfaces/infoPage.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    public _DataPageService: DataPageService
  ) { }

  ngOnInit(): void {
  }

  hideMenu() {
    document.getElementById('menuMobile').click();
  }

}
