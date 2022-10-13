import { Component, OnInit } from '@angular/core';
import { OpenWeather } from '../open-weather';
import { OpenWeatherService } from '../open-weather.service';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weatherData:Weather = {} as Weather;
  openWeatherData:OpenWeather = {} as OpenWeather;
  city:string="Detroit";

  constructor(private weatherApiService:WeatherService, private openWeatherService:OpenWeatherService) { }

  ngOnInit(): void {
    this.weatherApiService.fetchWeather().subscribe((response) => {
      // console.log(response);
      this.weatherData = response;
    });

    this.getOpenWeather();
  }

  getOpenWeather(){
    this.openWeatherService.searchCity(this.city).subscribe((reponse) => {
      // console.log(reponse);
      this.openWeatherData = reponse;
    });
  }

}
