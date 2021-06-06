import { Dispatch } from 'react';
import req from '../utils/request';
import { configEndpoint } from '../config';
import { IAllPokemonsTypesRequest, IPokemons } from '../interface/pokemons';
import { IAllPokemonsStateRequest } from '../interface';
import { IInitialState } from './index';

export enum AllPokemonsActionTypes {
  FETCH_TYPES = 'allPokemons/FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'allPokemons/FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'allPokemons/FETCH_TYPES_REJECT',
}

interface ITypeAction {
  type: AllPokemonsActionTypes;
  payload?: IPokemons;
}

type ActionTypes = ITypeAction;

export interface IAllPokemonsInitialState {
  allPokemonsData: IAllPokemonsStateRequest;
}

const initialState: IAllPokemonsInitialState = {
  allPokemonsData: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const allPokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case AllPokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        allPokemonsData: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case AllPokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        allPokemonsData: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case AllPokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        allPokemonsData: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export const getAllPokemonsData = (state: IInitialState) => state.allPokemons.allPokemonsData.data;
export const getAllPokemonsLoading = (state: IInitialState) => state.allPokemons.allPokemonsData.isLoading;
export const getAllPokemonsError = (state: IInitialState) => state.allPokemons.allPokemonsData.error;

export const getAllPokemonsAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: AllPokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<IAllPokemonsTypesRequest>(configEndpoint.getPokemons);
      dispatch({ type: AllPokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: AllPokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export default allPokemons;
