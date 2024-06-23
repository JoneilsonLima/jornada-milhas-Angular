import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(private _httpCliente: HttpClient) { }

  autenticar(email: string, senha: string): Observable<any> {
    return this._httpCliente.post(`${this.apiUrl}/auth/login`, {
      email,
      senha
    })
  }
}
