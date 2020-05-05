import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  getString,
  setString,
  remove,
  clear
}from 'tns-core-modules/application-settings';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: string[] = [];  

  constructor(private http: HttpClient) { }

  addToFavorites(favorite){
    this.favorites.push(favorite);
    setString('favorites', JSON.stringify(this.favorites));
  }

  getFavorites(){
    return JSON.parse(getString('favorites'));
  }

}