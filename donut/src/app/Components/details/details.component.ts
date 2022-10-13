import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleDonut } from 'src/app/Models/SingleDonut';
import { CartService } from 'src/app/Services/cart.service';
import { DonutService } from 'src/app/Services/donut.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  DisplayDonut:SingleDonut = {} as SingleDonut;
  constructor(private donutService:DonutService, private route:ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    let id:number = Number(this.route.snapshot.paramMap.get("id"));
    // console.log(id);
    this.donutService.fetchSingleDonut(id).subscribe((response)=> {
      this.DisplayDonut = response;
      // console.log(this.DisplayDonut);
    });
  }

  addToCart(){
    this.cartService.addToCart(this.DisplayDonut);
  }

}
