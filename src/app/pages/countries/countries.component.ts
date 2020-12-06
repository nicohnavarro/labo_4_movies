import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from 'src/app/components/country/countries.service';
import { ICountry } from 'src/app/components/country/ICountry';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: ICountry[];
  @Output() countryChoosen: EventEmitter<ICountry> = new EventEmitter<ICountry>();
  constructor(private countrySvc: CountriesService) {
    this.countries = [];
  }

  ngOnInit(): void {
    this.countrySvc.getAllCountries().subscribe((countries_info) => {
      let list_countries = Object.values(countries_info);
      this.countries = list_countries.map((country) => {
        return { id: country.alpha3Code, name: country.name, flag: country.flag }
      })
      console.log(this.countries);
    })
  }

  setCountry($event) {
    this.countryChoosen.emit($event);
  }

}
