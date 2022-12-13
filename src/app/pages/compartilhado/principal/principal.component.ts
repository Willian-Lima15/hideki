import { IUser } from './../../../shared/model/user/user.model';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  userList$: Observable<IUser[]> | null = null;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    this.userList$ = this.userService.getUsers()
  }

}
