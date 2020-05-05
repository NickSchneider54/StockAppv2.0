import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Searchitem } from '../../Interfaces/searchitem';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit, OnChanges{
  @Input() stocks: Searchitem[];

  constructor(private router: RouterExtensions) { }

  ngOnInit() { }

  onTap(item){
    this.router.navigate(['/details'],{
      queryParams:{
        "data" : item.symbol
      },
      transition: {
        name: 'slide',
        duration: 400,
        curve: 'linear'
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['stocks']){
      this.stocks = changes['stocks'].currentValue;
      console.log(changes['stocks'].currentValue)
    }
    console.log("Stock Changed");
    console.log(this.stocks);
  }

}
