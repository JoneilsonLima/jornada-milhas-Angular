import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../../core/types/type';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../core/services/form-busca.service';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss'
})
export class DropdownUfComponent implements OnInit {
  @Input({required: true}) label!: string;
  @Input({required: true}) iconePrefixo!: string;
  @Input({required: true}) controlName!: string;

  public estadoControl!: FormControl;
  public unidadesFederativas: UnidadeFederativa[] = [];
  public filteredFederativas: UnidadeFederativa[] = [];

  constructor(private _unidadeFederativaService: UnidadeFederativaService, private _formBuscaService: FormBuscaService) {}

  ngOnInit(): void {
    this.estadoControl = this._formBuscaService.obterControle(this.controlName);
    this.listarUnidadesFederativas();
    this.filtrarUnidadesFederativas();
  }

  listarUnidadesFederativas(): void {
    this._unidadeFederativaService.listar().subscribe({
      next: (unidadeFederativa) => {
        this.unidadesFederativas = unidadeFederativa;
        this.filteredFederativas = unidadeFederativa;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  filtrarUnidadesFederativas(): void {
    this.estadoControl?.valueChanges.subscribe(this.filtroUnidades.bind(this));
  }

  filtroUnidades(nomeFiltro: string): void{
    this.filteredFederativas = this.unidadesFederativas.filter((nomeUnidade: UnidadeFederativa) => {
      return nomeUnidade.nome.toLocaleLowerCase().includes(nomeFiltro.toLocaleLowerCase().trim());
    })
  }
}
