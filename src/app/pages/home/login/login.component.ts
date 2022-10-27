import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: [''],
      password: [''],
    });
  }


  submit() {
    if (this.formLogin.valid) {
      this.submitEM.emit(this.formLogin.value);
    }
  }
  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter();

}
