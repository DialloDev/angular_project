import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  titre = 'Prestation';
  listLinks = [
    {route: 'detail',
    label: 'detail'
    },
    {route: 'comment',
    label: 'comment'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
