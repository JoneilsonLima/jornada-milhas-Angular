import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  salvarToken(token: string): void {
    return localStorage.setItem(KEY, token);
  }

  excluirToken(): void {
    localStorage.getItem(KEY);
  }

  retornarToken() {
    return localStorage.getItem(KEY) ?? '';
  }


  possuiToken() {
    return !!this.retornarToken();
  }
}
