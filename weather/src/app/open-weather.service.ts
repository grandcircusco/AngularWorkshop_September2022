import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenWeather } from './open-weather';
import { secret } from './weather-forecast/secret';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {


  url:string = "https://api.openweathermap.org/data/2.5/weather";
  apiKey:string = secret.apikey;
  units:string = "imperial";


  constructor(private httpClient:HttpClient) { }

  searchCity(city:string): Observable<OpenWeather>{
    return this.httpClient.get<OpenWeather>(`${this.url}?appid=${this.apiKey}&q=${city}&units=${this.units}`);
  }
}
