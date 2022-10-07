import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote-api-model';
import { QuoteApiService } from 'src/app/services/quote-api.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Quote[] = [];

  // 1. add service to constructor for dependency injection
  constructor(private quoteApiService: QuoteApiService) { }

  ngOnInit(): void {
    // 2. use service where needed
    this.quoteApiService.fetchQuotes().subscribe((quotes) => {
      console.log(quotes);
      this.quotes = quotes;
    });
  }

}
