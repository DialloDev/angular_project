import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from 'src/app/prestations/services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[];
  constructor(
    private cs: ClientsService,
  ) { }

  ngOnInit() {
    this.collection = this.cs.collection;
    this.headers = [
      'client',
      'name',
      'email',
      'state'
    ];
  }
}
