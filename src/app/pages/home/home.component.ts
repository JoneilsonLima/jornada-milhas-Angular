import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/type';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public promocoesList: Promocao[] = [];

  constructor(private _promocoService: PromocaoService) {}

  ngOnInit(): void {
    this.listarPromocoes();
  }

  listarPromocoes(): void {
    this._promocoService.listarPromocoes()
      .pipe(
        take(1)
      )
      .subscribe({
        next: (promocoes) => {
          this.promocoesList = promocoes
          console.log(this.promocoesList)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
