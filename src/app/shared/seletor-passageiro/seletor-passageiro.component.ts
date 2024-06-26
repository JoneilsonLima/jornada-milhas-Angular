import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrl: './seletor-passageiro.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor{
  @Input({required: true}) titulo!: string;
  @Input({required: true}) subtitulo!: string;

  public value: number = 0;
  onChange = (value: number) => {};
  onTouch = () => {};

  writeValue(val: any): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
   this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
   // throw new Error('Method not implemented.');
  }

  decrementar(): void {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }

  incrementar(): void {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
    console.log(this.value);
  }
}
