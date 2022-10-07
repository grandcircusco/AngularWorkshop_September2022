import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote-api-model';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  // dependency injection for HttpClient
  constructor(private httpClient: HttpClient) { }

  fetchQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>("https://dwolverton.github.io/juneteenth/public/api/quotes.json");
  }
}
