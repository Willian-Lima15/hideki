import { User, UserAPI } from './../../shared/model/user/user.model';
import { first, map, tap, pluck } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:3000/user"

  constructor(
    private _http: HttpClient,
  ) { }

  autenticate(user:any) {
    return this._http.post(this.apiUrl, user)
  }

  getUsers(valor?:string){
    const params = valor ? new HttpParams().append('valor', valor) : undefined;

    return this._http.get<User[]>(this.apiUrl, {params})
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
