import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataPageService } from 'src/app/services/data-page.service';
import { PortafolioItem, PortafolioItemClass }from 'src/app/interfaces/portafolioItem.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  loading = true;
  item: PortafolioItemClass = new PortafolioItemClass('','','','','','','','','','','','','','');
  id = 0;
  constructor(
    public _route: ActivatedRoute,
    public _router: Router,
    private _DataPageService: DataPageService
  ) { }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      this.id = parseInt(params.id);
      if (this.id > 0) {
        this.getPortafolioItem();
      } else {
        this._router.navigate(['/portafolio']);
      }
     
    });
  }

  getPortafolioItem() {
    this.loading = true;
    this._DataPageService.getPortafolioItem(this.id).subscribe(
      (response: PortafolioItem) => {
        if (response) {
          this.item = response;
        } else {
          this._router.navigate(['/portafolio']);
        }
        this.loading = false;       
      },
      error => {
        this._router.navigate(['/portafolio']);
      }
    ); 
  }


}
