import { Observable } from 'rxjs';
import { first,map,tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/model/user/user.model';

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

  getUsers(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.apiUrl)
    .pipe(tap((res)=>console.log(res)
    ),map((res)=>res.sort((userA, userB)=>this.ordenaPorNome(userA,userB))))
  }

private ordenaPorNome(userA:IUser,userB: IUser){
  // if(userA.nome > userB.nome){
  //   return 1;
  // }
  if(userA.nome < userB.nome){
    return -1;
  }
  return 0
}

}
