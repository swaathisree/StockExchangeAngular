import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeDetailsComponent } from './exchange-details/exchange-details.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';

const routes: Routes = [
  { path: 'details/:id', component: ExchangeDetailsComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'addstock', component: AddStockExchangeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
