import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/interfaces/pokemon-model';
import { DeckService } from 'src/app/services/deck.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  deck: PokemonDetails[] = [];

  constructor(private deckService: DeckService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.deck = this.deckService.getDeck();
  }

  removeFromDeck(pokemon: PokemonDetails) {
    this.deckService.removeFromDeck(pokemon.id);
    if (this.profileService.getPet() === pokemon.sprites.defaultFront) {
      this.profileService.setPet(null);
    }
  }

  setPet(pokemon: PokemonDetails) {
    this.profileService.setPet(pokemon.sprites.defaultFront);
  }

}
