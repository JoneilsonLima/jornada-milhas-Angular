import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private _fb: FormBuilder, private dialog: MatDialog) {
    this.formBusca = this._fb.group({
      somenteIda: [false],
      origem: [''],
      destino: [''],
      tipo: ['Econômica'],
    });
  }

  obterControle(nome:string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  alterarTipo(event: MatChipSelectionChange, tipo: string) {
    if (event.selected) {
      this.formBusca.patchValue({
        tipo,
      })
    }
  }

}
