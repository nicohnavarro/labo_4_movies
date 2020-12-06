import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICountry } from '../ICountry';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {
  @Input() list_countries: ICountry[];
  @Output() countrySelected: EventEmitter<ICountry>= new EventEmitter<ICountry>();
  constructor() { }

  ngOnInit(): void {
  }

  selectedCountry(country:ICountry){
    this.countrySelected.emit(country);
  }

}
