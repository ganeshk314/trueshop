import { Component } from '@angular/core';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  seller: any;
  constructor(){ }

  signUp(data:SignUp):void{
    this.seller.userSignup(data)
  }
}
