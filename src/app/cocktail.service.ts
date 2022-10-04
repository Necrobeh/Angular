import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailList : Cocktail[] = [
    new Cocktail('Peacock', 14, 'assets/peacock.jpg'),
    new Cocktail('Qasoar', 9, 'assets/qasoar.jpg'),
    new Cocktail('Golf Score', 10, 'assets/golf-score.jpg'),
    new Cocktail('Not-a-Moro', 7, 'assets/not-a-moro.jpg'),
    new Cocktail('Humming Bird', 15, 'assets/humming-bird.jpg')
  ] ;

  constructor() { }

  public getCocktails() : Cocktail[] {
    return this.cocktailList;
}

}
