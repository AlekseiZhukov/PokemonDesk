import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import req from '../utils/request';
import {
  AllPokemonsActionTypes,
  getAllPokemonsData,
  getAllPokemonsError,
  getAllPokemonsLoading,
} from '../store/allPokemons';
import { configEndpoint } from '../config';

const useDataRedux = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const dispatch = useDispatch();

  const data = useSelector(getAllPokemonsData);
  const isLoading = useSelector(getAllPokemonsLoading);
  const isError = useSelector(getAllPokemonsError);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      dispatch({ type: AllPokemonsActionTypes.FETCH_TYPES });

      try {
        const result = await req<T>(configEndpoint.getPokemons, query);
        dispatch({ type: AllPokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: result });
      } catch (error) {
        dispatch({ type: AllPokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
      }
    };
    getData();
  }, deps);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useDataRedux;
