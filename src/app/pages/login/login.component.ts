import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get senhaControl(): FormControl {
    return this.loginForm.get('senha') as FormControl;
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
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }
}
