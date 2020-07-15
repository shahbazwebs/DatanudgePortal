import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder
  ) { }
  loginforms: FormGroup;

  ngOnInit(): void {
    this.loginforms = this.formbuilder.group({
      userEmail: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      userPassword: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]],
    });
  }
  onSubmit(){
    console.log(this.loginforms.value);
    this.loginforms.reset();
  }

}
