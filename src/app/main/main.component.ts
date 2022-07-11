import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import {Location} from '@angular/common'; 
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
constructor(private location: Location){}

  
  dataArray: any = []
  
  signUp = (): void => {
    console.log(JSON.stringify(this.dataArray.password))
    console.log(localStorage.getItem(`${this.dataArray.login}`))
    if (localStorage.length === 0){
      

      this.location.replaceState("/second-page")
      window.location.reload()
    
      localStorage.setItem(`${this.dataArray.login}`, JSON.stringify(this.dataArray.password))

    } else if(`${this.dataArray.login}` in localStorage === true && JSON.stringify(this.dataArray.password) === localStorage.getItem(`${this.dataArray.login}`)) {
       this.location.replaceState("/second-page")
       window.location.reload()
     } else {
       alert('Wrong login or password')
       window.location.reload()
     }
    
  }
}


