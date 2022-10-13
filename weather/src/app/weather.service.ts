import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  fetchWeather(): Observable<Weather>{
    return this.httpClient.get<Weather>("https://api.weather.gov/gridpoints/DTX/65,33/forecast");
  }
}
