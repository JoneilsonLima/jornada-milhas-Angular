import { Component, Input } from '@angular/core';
import { Depoimento } from '../../core/types/type';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.scss'
})
export class CardDepoimentosComponent {
  @Input() depoimento!: Depoimento;
}
