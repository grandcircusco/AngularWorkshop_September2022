import { PokemonDetails, PokemonListItem } from "./pokemon-model";

// ** Response for a listing of pokemon **
export function pokemonApiResultToListItem(result: PokemonResult): PokemonListItem {
  // Because the Pokemon API does not include the "id" directly as
  // a property, here we transform the results to include the "id", which
  // is extracted from the Pokemon's "url".
  const id = parseInt((result.url.match(/\d+\/$/) ?? [''])[0]);
  return { name: result.name, id: id };
}

export interface PokemonApiResults {
  count: number;
  next: string;
  previous: null;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
}

// ** Details for a particular pokemon **
export function pokemonApiDetailsToPokemonDetails(api: PokemonApiDetails): PokemonDetails {
  return {
    id: api.id,
    name: api.name,
    species: api.species.name,
    types: api.types.map(apiType => apiType.type.name),
    sprites: {
      defaultFront: api.sprites.front_default,
      defaultBack: api.sprites.back_default,
      shinyFront: api.sprites.front_shiny,
      shinyBack: api.sprites.back_shiny,
      home: api.sprites.other.home.front_default,
      dreamworld: api.sprites.other.dream_world.front_default,
      officialArtwork: api.sprites.other["official-artwork"].front_default
    }
  }
}

export interface PokemonApiDetails {
  name: string;
  id: number;
  sprites: Sprites;
  species: Species;
  types: Type[];
}

export interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: Other;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

export interface DreamWorld {
  front_default: string;
}
export interface Home {
  front_default: string;
  front_shiny: string;
}
export interface OfficialArtwork {
  front_default: string;
}

export interface Species {
  name: string;
}

export interface Type {
  type: {
    name: string;
  };
}
