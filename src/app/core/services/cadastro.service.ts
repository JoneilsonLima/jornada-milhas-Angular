import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CadastroRequest } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  cadastrar(dadosCadastro: CadastroRequest): Observable<CadastroRequest> {
    return this.httpClient.post<CadastroRequest>(`${this.apiUrl}/auth/cadastro`, dadosCadastro);
  }
}
