import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeDetailsComponent } from './exchange-details/exchange-details.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { ExchangeService } from '../app/exchange.service';
import { DetailService } from '../app/detail.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    ExchangeComponent,
    ExchangeDetailsComponent,
    AddStockExchangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [ExchangeService, DetailService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
