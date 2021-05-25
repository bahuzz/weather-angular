import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  searchForm = new FormGroup({
    city: new FormControl('')
  });
  

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchForm.value.city);
    this.apiService.getForecast(this.searchForm.value.city)
      .subscribe(data => console.log(data))
  }
}
