import { combineReducers } from 'redux';
import app from './app';
import pokemons, { IPokemonsInitialSatae } from './pokemon';
import allPokemons, { IAllPokemonsInitialState } from './allPokemons';

export interface IInitialState {
  pokemons: IPokemonsInitialSatae;
  allPokemons: IAllPokemonsInitialState;
}

const createRootReducer = () => {
  return combineReducers({
    app,
    pokemons,
    allPokemons,
  });
};

export default createRootReducer;
