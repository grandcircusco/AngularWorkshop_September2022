import { TestBed } from '@angular/core/testing';

import { QuoteApiService } from './quote-api.service';

describe('QuoteApiService', () => {
  let service: QuoteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
