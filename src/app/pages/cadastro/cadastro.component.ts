import { Component } from '@angular/core';
import { FormularioService } from '../../core/services/formulario.service';
import { CadastroService } from '../../core/services/cadastro.service';
import { FormGroup } from '@angular/forms';
import { CadastroRequest } from '../../core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  public perfilComponent: boolean = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService
  ) {}

  onClickCadastro() {
    const formCadastro = this.formularioService.cadastro;

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as CadastroRequest;

      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso!', value)
        },
        error: (error) => {
          console.error('Erro ao realizar cadastro', error);
        }
      });

    }
  }

}
