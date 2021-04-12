import { Component, OnInit } from '@angular/core';
import { DataPageService } from 'src/app/services/data-page.service';
import { Portafolio, PortafolioClass } from 'src/app/interfaces/portafolio.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  portafolio: PortafolioClass = new PortafolioClass('',0,'','','','');
  loading = false;

  constructor(
    private _DataPageService: DataPageService
  ) {
   }

  ngOnInit(): void {
    this.getPortafolio(); 
  }

  getPortafolio() {
    this.loading = true;
    this._DataPageService.getPortafolio().subscribe(
      (response: Portafolio) => {
        let portafolio: Portafolio = this.sortJSON(response,'id','desc');
        this.portafolio = portafolio;
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }

  sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = parseFloat(a[key]),
        y = parseFloat(b[key]);     
        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
  }

}
