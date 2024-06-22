import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private _promocoService: PromocaoService) {

  }

  ngOnInit(): void {

  }

}
