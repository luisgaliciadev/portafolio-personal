import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/services/data-page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nombre = '';
  asunto = '';
  email = '';
  mensaje = '';
  loading = false;

  constructor(
    public _DataPageService: DataPageService
  ) { }

  ngOnInit(): void {
  }

  abrirWs() {
    window.open(this._DataPageService.pageInfo.linkWhatsApp);   
  }

  sendMail() {
    this.loading = true;
    let data = {
      "nombre": this.nombre,
      "correo": this.email,
      "asunto": this.asunto,
      "mensaje": this.mensaje
    };
    this._DataPageService.sendMail(data).subscribe(
      (response) => {
        this.nombre = '';
        this.email = '';
        this.asunto = '';
        this.mensaje = '';
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    )
  }

}
