import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  constructor() { }

  fetchQuotes(): void {
    console.log("TODO: fetch quotes");
  }
}
