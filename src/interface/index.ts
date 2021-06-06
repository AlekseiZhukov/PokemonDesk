import { IPokemons } from './pokemons';

export interface IStateRequest<T> {
  isLoading: boolean;
  data: null | T[];
  error: null | object;
}

export interface IAllPokemonsStateRequest {
  isLoading: boolean;
  data: null | IPokemons;
  error: null | object;
}
