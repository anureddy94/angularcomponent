import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(rb:FormBuilder) {
    this.registerForm=rb.group({
      'firstName':["Anu",Validators.required];
    })
  }

  ngOnInit() {
  }
  register={

  }
  registerForm:FormGroup
  registerUser(){
    console.log(this.register);
  }

}
