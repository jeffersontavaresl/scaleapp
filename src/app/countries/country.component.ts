import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { CountryService } from './country.service';


@Component({
  selector: 'country-root',
  templateUrl: './country.component.html',
})
export class CountryComponent implements OnInit{

  public countries!: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  public getCountries(): void {
    this.countryService.getCountries().subscribe( data =>{
      this.countries = data;
      data.sort(function(a,b) {
        return b.fronteiras.length - a.fronteiras.length;
      })
    });
  }

}

