import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.scss'
})
export class CardDepoimentosComponent {
  public depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `;
  public autoria: string = 'Mariana Faustino';
}
