import { Component, OnInit } from '@angular/core';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Searchitem } from '../../Interfaces/searchitem';
import { StockService } from '../../Services/stock.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'StockAppv2.0';

  searchPhrase: string;
  stocks: Searchitem[] = [];  

  constructor(private search: StockService, private router: RouterExtensions) { }

  ngOnInit(){

  }

  onSubmit(args) {
    const searchItem = args.object as SearchBar;
    this.search.searchStocks(searchItem.text.toString().toUpperCase()).subscribe((result: any[]) =>{
      for(var i = 0; i < result['bestMatches'].length; i++){
        this.stocks[i] = {symbol: result['bestMatches'][i]['1. symbol'], name: result['bestMatches'][i]['2. name']}
      }
      console.log(this.stocks)
    });
  }

  onTextChanged(args) {
    const searchItem = args.object as SearchBar;
    this.stocks = [];
    this.search.searchStocks(searchItem.text.toString().toUpperCase()).subscribe((result: any[]) =>{
      for(var i = 0; i < result['bestMatches'].length; i++){
        this.stocks[i] = {symbol: result['bestMatches'][i]['1. symbol'], name: result['bestMatches'][i]['2. name']}
      }
      console.log(this.stocks)      
    });
  }

  onClear(args) {
    this.stocks = [];
    console.log(`Search Cleared`);
  }

  routeFavorites(){
    this.router.navigate(['/favorites'], {
      transition: {
        name: 'slide',
        duration: 400,
        curve: 'linear'
      }
    });
  }
}
