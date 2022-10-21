import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsurio } from 'src/app/shared/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

constructor(
  private _http: HttpClient,
  private _router: Router
) { }

  logar(usuario: IUsurio) {

  }

}
