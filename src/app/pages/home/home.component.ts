import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _nome:string='Willian lima';


  constructor() { }

  ngOnInit(): void {
  }

  get nome(): string {
    return this._nome
  }

  set nome(val: string) {
    this._nome = val
  }

  onShow() {

  }

}
