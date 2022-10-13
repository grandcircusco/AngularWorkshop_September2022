import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import {
  pokemonApiResultToListItem,
  PokemonApiDetails,
  PokemonApiResults,
  pokemonApiDetailsToPokemonDetails,
} from '../interfaces/pokemon-api-model';
import { PokemonDetails, PokemonListItem } from '../interfaces/pokemon-model';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  fetchAllPokemon(): Observable<PokemonListItem[]> {
    return this.http
      .get<PokemonApiResults>('https://pokeapi.co/api/v2/pokemon/?limit=200')
      .pipe(map((data) => data.results.map(pokemonApiResultToListItem)));
  }

  fetchPokemonById(id: number): Observable<PokemonDetails | null> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return this.http
      .get<PokemonApiDetails>(url)
      .pipe(
        map(pokemonApiDetailsToPokemonDetails),
        catchError(err => {
          console.log(err);

          return of(null);
        })
        );
  }
}
