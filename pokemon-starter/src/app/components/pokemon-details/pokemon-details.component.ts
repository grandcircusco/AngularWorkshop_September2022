import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/app/interfaces/pokemon-model';
import { DeckService } from 'src/app/services/deck.service';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: PokemonDetails | null = null;
  loading:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private pokemonApiService: PokemonApiService,
    private deckService: DeckService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pokemonApiService
        .fetchPokemonById(parseInt(params['id']))
        .subscribe((data) => {
          this.pokemon = data;
        });
        this.loading = false;
    });
  }

  addToDeck(): void {
    if (this.pokemon) {
      this.deckService.addToDeck(this.pokemon);
    }
  }
}
