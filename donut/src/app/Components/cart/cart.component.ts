import { Component, OnInit } from '@angular/core';
import { SingleDonut } from 'src/app/Models/SingleDonut';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:SingleDonut[] = [];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.Cart;
  }

  removeFromCart(donut:SingleDonut){
    this.cartService.removeFromCart(donut);
    this.cart = this.cartService.Cart;
  }

  displayCartPrice(){
    return this.cartService.getCost();
  }
  displayCartCalories(){
    return this.cartService.getCalories();
  }

  getCartDistinct():any{
    // return this.cart.map(d => d.name).keys();
    return [...new Map(this.cart.map(item =>[item.id, item])).values()];
  }

  getQuantity(donut:SingleDonut):number{
    return this.cart.reduce((x,y) => {
      if(y.id == donut.id){
        return x + 1
      }
      else{
        return x
      }
    },0);
  }
}
