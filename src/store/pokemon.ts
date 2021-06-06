import { Dispatch } from 'react';
import req from '../utils/request';
import { configEndpoint } from '../config';
import { ITypesRequest } from '../interface/pokemons';
import { IStateRequest } from '../interface';
import { IInitialState } from './index';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'pokemons/FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'pokemons/FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'pokemons/FETCH_TYPES_REJECT',
}

interface ITypesAction {
  type: PokemonsActionTypes;
  payload?: string[];
}

type ActionTypes = ITypesAction;

export interface IPokemonsInitialSatae {
  types: IStateRequest<string>;
}

const initialState: IPokemonsInitialSatae = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const pokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>(configEndpoint.getPokemonsTypes);
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export default pokemons;
