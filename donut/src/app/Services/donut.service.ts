import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutList } from '../Models/DonutList';
import { SingleDonut } from '../Models/SingleDonut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http: HttpClient) { }

  url: string = "https://grandcircusco.github.io/demo-apis/donuts";

  fetchDonutList():Observable<DonutList>{
    return this.http.get<DonutList>(`${this.url}.json`);
  }

  fetchSingleDonut(id:number):Observable<SingleDonut>{
    return this.http.get<SingleDonut>(`${this.url}/${id}.json`);
  }
}
