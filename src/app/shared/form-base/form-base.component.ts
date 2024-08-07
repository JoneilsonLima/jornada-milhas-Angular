import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativa } from '../../core/types/type';
import { FormularioService } from '../../core/services/formulario.service';
import { FormValidators } from '../form-validators';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss'
})
export class FormBaseComponent {
  @Input() perfilComponent!: boolean;
  @Output('onClickCadastro') onClickCadastroEmitt: EventEmitter<void> = new EventEmitter();

  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this._buildForm();
  }


  onClickCadastrar() {
    this.onClickCadastroEmitt.emit();
  }

  private _buildForm() {
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
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidators.equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3), FormValidators.equalTo('senha')]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });

    this.formularioService.cadastro = this.cadastroForm;
  }
}
