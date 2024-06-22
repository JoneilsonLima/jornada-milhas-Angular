import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.formBusca = this._fb.group({
      somenteIda: [false]
    });
  }
}
