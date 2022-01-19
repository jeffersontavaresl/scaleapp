import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';

import { AppComponent } from './app.component';
import { CountryService } from './countries/country.service';
import { UserService } from './user/user.service';
import { CountryComponent } from './countries/country.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [UserService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
