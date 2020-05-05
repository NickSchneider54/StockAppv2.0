import { Component, OnInit } from '@angular/core';
import { StockService } from '../../Services/stock.service';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../../Interfaces/stock';
import { FavoritesService } from '../../Services/favorites.service';
import { Searchitem } from '../../Interfaces/searchitem';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  symbol: string;
  name: string;
  stock: Stock;
  format = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    minimumFractionDigits: 2
  });

  constructor(private route: ActivatedRoute, private search: StockService, private favorites: FavoritesService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.symbol = params['data'];
    });

    this.search.getStock(this.symbol).subscribe((result: any[]) =>{      
      result = result['Global Quote'];
      this.stock = {symbol: result['01. symbol'], price: this.format.format( parseFloat(result['05. price'])), poc: parseFloat(result['10. change percent']).toFixed(2)+"%",  high: this.format.format(parseFloat(result['03. high'])), low: this.format.format(parseFloat(result['04. low']))};
      console.log(this.stock);
    });
  }

  addFavorites(){
    this.favorites.addToFavorites(this.stock.symbol);
  }

}
