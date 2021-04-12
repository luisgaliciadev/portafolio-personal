import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/services/data-page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public _DataPageService: DataPageService
  ) { }

  ngOnInit(): void {
  }

  abrirWs() {
    window.open(this._DataPageService.pageInfo.linkWhatsApp);   
  }

}
