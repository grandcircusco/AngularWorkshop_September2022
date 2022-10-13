import { Injectable } from '@angular/core';
import { PokemonDetails } from '../interfaces/pokemon-model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private deck: PokemonDetails[] = [
    { "id": 2, "name": "ivysaur", "species": "ivysaur", "types": [ "grass", "poison" ], "sprites": { "defaultFront": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "defaultBack": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png", "shinyFront": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png", "shinyBack": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png", "home": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png", "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg", "officialArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" } },
    { "id": 197, "name": "umbreon", "species": "umbreon", "types": [ "dark" ], "sprites": { "defaultFront": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png", "defaultBack": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/197.png", "shinyFront": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/197.png", "shinyBack": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/197.png", "home": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/197.png", "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/197.svg", "officialArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png" } }
  ];

  constructor() {}

  getDeck(): PokemonDetails[] {
    return this.deck;
  }
  addToDeck(pokemon: PokemonDetails): void {
    this.deck.push(pokemon);
  }
  removeFromDeck(id: number): void {
    const index = this.deck.findIndex((poke) => poke.id === id);
    if (index !== -1) {
      this.deck.splice(index, 1);
    }
  }
  isInDeck(id: number): boolean {
    return this.deck.some((poke) => poke.id === id);
  }
}
