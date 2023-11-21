import { Component } from '@angular/core';
import { SellService } from '../services/sell.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  constructor(private seller:SellService, private router:Router){ }

  ngOnInit():void{
    this.seller.reloadseller()
  }

  signUp(data:SignUp):void{
    this.seller.userSignup(data)
  }
}
