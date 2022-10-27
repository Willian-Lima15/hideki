import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {

  formSignup!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formSignup = this.fb.group({
      userName:[''],
      password:[''],
      email:['']
  })
  }

  salvar() {

  }

}
