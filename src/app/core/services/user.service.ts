import { User, UserAPI } from './../../shared/model/user/user.model';
import { first, map, tap, pluck } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private apiUrl = "http://localhost:3000/user";

  constructor(
    private _http: HttpClient,
  ) { }

  autenticate(user:any) {
    return this._http.post(`${environment.apiUrl}/user`, user)
  }

  getUsers(valor?:string){
    const params = valor ? new HttpParams().append('valor', valor) : undefined;

    return this._http.get<User[]>(`${environment.apiUrl}/user`, {params})
    .pipe(tap((res)=>console.log(res)
    ),map((res)=>res.sort((userA, userB)=>this.ordenaPorNome(userA,userB))))
  }

private ordenaPorNome(userA:User,userB: User){
  if(userA.nome > userB.nome){
    return 1;
  }
  if(userA.nome < userB.nome){
    return -1;
  }
  return 0
}

}
