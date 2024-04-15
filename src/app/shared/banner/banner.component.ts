import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input( { required: true } ) src: string = '';
  @Input( { required: true } ) alt: string = '';

}
