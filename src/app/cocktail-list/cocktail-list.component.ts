import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktailList : Cocktail[] = [];

  constructor(public cocktailService : CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(availableCocktails => {
      this.cocktailList = availableCocktails;
      console.log(this.cocktailList);
      
    })
  }

}
