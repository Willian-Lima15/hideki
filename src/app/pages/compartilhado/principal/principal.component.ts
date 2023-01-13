import { IUser } from './../../../shared/model/user/user.model';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable,merge } from 'rxjs';
import { tap, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

const ESPERA_DIGITACAO = 300;
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  userInput = new FormControl;//no template

  todoUsers$ = this.userService.getUsers();//carrega todos os dados na pagina

  filtroPeloInput$ = this.userInput.valueChanges.pipe(//filtro pelo que é digitado no
    debounceTime(ESPERA_DIGITACAO),
    tap(()=> {console.log('fluxo')}),
    filter((valorDigitado)=> valorDigitado.length >= 3 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap((valorDigitado)=> this.userService.getUsers(valorDigitado)))

  userList$ = merge(this.todoUsers$,this.filtroPeloInput$)

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

}
