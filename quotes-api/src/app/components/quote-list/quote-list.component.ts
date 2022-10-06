import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from 'src/app/services/quote-api.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  // 1. add service to constructor for dependency injection
  constructor(private quoteApiService: QuoteApiService) { }

  ngOnInit(): void {
    // 2. use service where needed
    this.quoteApiService.fetchQuotes();
  }

}
