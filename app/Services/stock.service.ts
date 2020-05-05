import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  ping: string;

  constructor(private http: HttpClient) { }

  getStock(stock){
    this.ping = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=NA0QPIFBG33ZB2M0`;
    return this.http.get(this.ping);
  }

  searchStocks(search){
    this.ping = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=NA0QPIFBG33ZB2M0`;
    return this.http.get(this.ping);
  }

}
