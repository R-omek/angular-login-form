import { Component, ElementRef, ViewChild } from '@angular/core';
import {Location} from '@angular/common'; 


 

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {
  constructor(private location: Location){}

  @ViewChild('login') login:ElementRef;
  @ViewChild('password') password:ElementRef;

  
  ngAfterViewInit(){

    this.loginArr = Object.keys(localStorage)
    this.loginArr.forEach((element: any) => {
      this.login.nativeElement.innerHTML += `<li class="form__users-data__list__el">${element}</li>`
    });
    this.passwordArr = Object.values(localStorage)
    this.passwordArr.forEach((element: any) => {
      this.password.nativeElement.innerHTML += `<li class="form__users-data__list__el">${element}</li>`
    });

 }
  loginArr: any = []
  passwordArr: any = []
  
  dataArray: any = []
  addNewUser() {
    

    localStorage.setItem(`${this.dataArray.login}`, JSON.stringify(this.dataArray.password))
    window.location.reload()

    // this.login.nativeElement.innerHTML += `<li class="form__users-data__list__el">${localStorage.getItem(this.dataArray.login)}</li>`
    // this.password.nativeElement.innerHTML += `<li class="form__users-data__list__el">${localStorage.getItem(this.dataArray.password)}</li>`
  }
  
}

