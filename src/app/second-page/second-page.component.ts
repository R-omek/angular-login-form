import { Component } from '@angular/core';
import {Location} from '@angular/common'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';


 

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {
  constructor(private location: Location){}
  loginArr: string[];
  passwordArr: string[];
  
  
  formGroup: FormGroup
  formControl: FormControl

  ngOnInit() {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.loginArr = Object.keys(localStorage)
    this.passwordArr = Object.values(localStorage)
  }

  

  addNewUser() {
    localStorage.setItem(`${this.formGroup.value.login}`, `${this.formGroup.value.password}`)
    this.formGroup.setValue({
      login: '',
      password: ''
     })
     this.loginArr = Object.keys(localStorage)
    this.passwordArr = Object.values(localStorage)
  }
  
}

