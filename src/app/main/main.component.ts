import { Component, Input, OnInit} from '@angular/core';
import { ResourceLoader } from '@angular/compiler';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
constructor(private router: Router){}
  formGroup: FormGroup
  formControl: FormControl

  ngOnInit() {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required])
    })
    
  }
  
  dataArray: any = []
  err = false
  signUp = (): void => {
    if (localStorage.length === 0){
      localStorage.setItem(`${this.formGroup.value.login}`, `${this.formGroup.value.password}`)
      this.router.navigateByUrl('second-page')
    } else if(`${this.formGroup.value.login}` in localStorage === true && this.formGroup.value.password === localStorage.getItem(`${this.formGroup.value.login}`)) {
      this.router.navigateByUrl('second-page')
     } else {
       this.err = true
       this.formGroup.setValue({
        login: '',
        password: ''
       })
     }
    
  }
}


