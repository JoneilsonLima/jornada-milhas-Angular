import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutenticacaoService } from '../../core/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _authService: AutenticacaoService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._buildForm();
  }

  login(): void {
    const {
      email,
      senha
    } = this.loginForm.getRawValue();

    this._authService.autenticar(email,senha).subscribe({
      next: (value) => {
        console.log(value);
        this._router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private _buildForm(): void {
    this.loginForm = this._fb.group({
      email: [''],
      senha: ['']
    });
  }
}
