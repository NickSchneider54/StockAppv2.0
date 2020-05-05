import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../Services/favorites.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites = [];

  constructor(private favorite: FavoritesService, private router: RouterExtensions) { }

  ngOnInit() {
    this.favorites = this.favorite.getFavorites();
    console.log(this.favorites);
  }

  onTap(item){
    this.router.navigate(['/details'],{
      queryParams:{
        "data" : item
      },
      transition: {
        name: 'slide',
        duration: 400,
        curve: 'linear'
      }
    });
  }

}
