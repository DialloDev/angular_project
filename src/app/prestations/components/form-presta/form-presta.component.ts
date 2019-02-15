import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from 'src/shared/enums/state.enum';
import { Prestation } from 'src/shared/models/prestation.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-presta',
  templateUrl: './form-presta.component.html',
  styleUrls: ['./form-presta.component.scss']
})
export class FormPrestaComponent implements OnInit {
 public  form: FormGroup;
  public states = State;
  @Input()  init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  public onSubmit() {
    console.log(this.form.value);
    this.nItem.emit(this.init);
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client, Validators.compose([Validators.required, Validators.minLength(3)])],
      tjmHt:  [this.init.tjmHt],
      nbJours:  [this.init.nbJours],
      tauxTva:  [this.init.tauxTva],
      comment:  [this.init.comment],
      state:  [this.init.state]

    });
  }
}
