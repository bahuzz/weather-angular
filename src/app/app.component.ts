import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather';
  forecast: any = [];
  errorMessage:string = '';

  constructor(private apiService: ApiService) { }

  onCity(e:string) {
    this.errorMessage = '';
    this.forecast = [];
    this.apiService.getForecast(e)
      .subscribe(data => {
        this.forecast = data.list.map((item:any) => { 
          return {name:item.dt_txt, value:item.main.temp }
        });
      },
      error => this.errorMessage = `The ${e} is ${error}`)
  }
}
