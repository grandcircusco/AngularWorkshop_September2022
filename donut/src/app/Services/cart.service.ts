import { Injectable } from '@angular/core';
import { SingleDonut } from '../Models/SingleDonut';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Cart:SingleDonut[] = [];

  constructor() { }

  addToCart(donut:SingleDonut):void{
    this.Cart.push(donut);
    console.log(this.Cart);
  }
  removeFromCart(donut:SingleDonut):void{
    let index:number = this.Cart.findIndex(d => d == donut);
    this.Cart.splice(index,1);
  }
  getCost():number{
    return this.Cart.length;
  }
  getCalories():number{
    return this.Cart.reduce((a,b)=> {return a + b.calories},0);
  }
}
