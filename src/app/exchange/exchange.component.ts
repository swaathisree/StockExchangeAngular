import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ExchangeService } from '../exchange.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  constructor(
    private router: Router,
    private _exchangeService: ExchangeService,
    private _detailService: DetailService
  ) {}

  public items = [];
  ngOnInit(): void {
    this._exchangeService.getItems().subscribe((data) => (this.items = data));
    console.log('Here');
    console.log(this.items);
  }

  GoToExchange(item) {
    console.log(item);
    this._detailService.updateitemdata(item);
  }
  // items: any[] = [
  //   { id: 1, title: 'Item 1' },
  //   { id: 2, title: 'Item 2' },
  //   { id: 3, title: 'Item 3' },
  // ];
}
