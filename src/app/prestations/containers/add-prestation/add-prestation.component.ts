import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/shared/models/prestation.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {
  constructor(
    private ps: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  public add(item: Prestation) {
    this.ps.add(item).then((data) => {
    this.router.navigate(['../'], {relativeTo: this.route});
    });
  }
}
