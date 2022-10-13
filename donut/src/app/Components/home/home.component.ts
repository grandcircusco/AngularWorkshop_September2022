import { Component, OnInit } from '@angular/core';
import { DonutList } from 'src/app/Models/DonutList';
import { DonutService } from 'src/app/Services/donut.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result:DonutList = {} as DonutList;
  constructor(private donutService:DonutService) { }

  ngOnInit(): void {
    this.donutService.fetchDonutList().subscribe((response) => {
      this.result = response;
      // console.log(this.result)
    });
  }

}
