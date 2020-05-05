import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchresultsComponent } from './Components/searchresults/searchresults.component';
import { StockDetailsComponent } from './Components/stock-details/stock-details.component';
import { FavoritesComponent } from './Components/favorites/favorites.component';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      SearchresultsComponent,
      StockDetailsComponent,
      FavoritesComponent,
  ],
  imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptHttpClientModule ,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

