import { Component, OnInit } from '@angular/core';
import { PokemonListItem } from 'src/app/interfaces/pokemon-model';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  results: PokemonListItem[] = [];

  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    this.pokemonApiService.fetchAllPokemon().subscribe(data => {
      this.results = data;
    });
  }

}
