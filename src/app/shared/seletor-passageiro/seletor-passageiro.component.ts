import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrl: './seletor-passageiro.component.scss'
})
export class SeletorPassageiroComponent {
  @Input({required: true}) titulo!: string;
  @Input({required: true}) subtitulo!: string;
}
