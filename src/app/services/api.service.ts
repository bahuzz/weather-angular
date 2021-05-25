import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey:string = "bad46dfee1ae1125ec4faf31e63449de";

  constructor(private http: HttpClient) { }

  getForecast(city:string):Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric`
    return this.http.get(url)
  }
}
