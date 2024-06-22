import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Depoimento, Promocao } from '../../core/types/type';
import { take } from 'rxjs';
import { DepoimentoService } from '../../core/services/depoimento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public promocoesList: Promocao[] = [];
  public depoimentos: Depoimento[] = [];

  constructor(private _promocoService: PromocaoService, private _depoimentosService: DepoimentoService) {}

  ngOnInit(): void {
    this.listarPromocoes();
    this.listarDepoimentos();
  }

  listarPromocoes(): void {
    this._promocoService.listarPromocoes()
      .pipe(
        take(1)
      )
      .subscribe({
        next: (promocoes) => {
          this.promocoesList = promocoes
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  listarDepoimentos(): void {
    this._depoimentosService.listar()
    .pipe(
      take(1)
    )
    .subscribe({
      next: (depoimento) => {
        this.depoimentos = depoimento
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
