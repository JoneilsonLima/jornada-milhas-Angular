import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativa } from '../../core/types/type';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss'
})
export class FormBaseComponent {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });
  }
}