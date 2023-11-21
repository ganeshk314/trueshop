import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SellService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router:Router) {}
  userSignup(data: SignUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedIn.next(true)
      localStorage.setItem('seller',JSON.stringify(result.body))
    this.router.navigate(['sell-home']);
      });
  }
  reloadseller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['sell']);
    }
  }
}
