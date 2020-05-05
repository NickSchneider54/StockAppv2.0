import { Component } from '@angular/core';
import { SearchBar } from "tns-core-modules/ui/search-bar";

@Component({
  selector: 'app-root',
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
  searchPhrase: string;

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
}
