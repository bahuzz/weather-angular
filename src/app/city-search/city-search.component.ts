import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent {

  searchForm = new FormGroup({
    city: new FormControl('')
  });
  @Output() cityEvent = new EventEmitter<string>();

  constructor() { }

  onSubmit() {
    this.cityEvent.emit(this.searchForm.value.city);
  }
}
