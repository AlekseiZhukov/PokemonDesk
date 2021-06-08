import React, { useEffect, useState } from 'react';
import { A } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Loader from '../../components/Loader';
// import useData from '../../hook/getData';
import useDataRedux from '../../hook/getDataRedux';
import { IPokemons, PokemonRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import s from './PokedexPage.module.scss';
import InputFilter from '../../components/Filter';
import { getPokemonsTypes, getTypesAction, getPokemonsTypesLoading } from '../../store/pokemon';
import { configEndpoint } from '../../config';

interface IQuery {
  [n: string]: string | number;
}

interface IValues {
  [n: string]: string;
}

const PokedexPage = () => {
  const dispatch = useDispatch();

  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);

  // const allPokemonsData = useSelector(getAllPokemonsData)
  // const allPokemonsDataLoading = useSelector(getAllPokemonsLoading)

  const [searchValue, setSearchValue] = useState('');
  const [n, setN] = useState('');

  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 1000);

  // const { data, isLoading, isError } = useData<IPokemons>(configEndpoint.getPokemons, query, [debouncedValue, n]);
  const { data, isLoading, isError } = useDataRedux<IPokemons>(configEndpoint.getPokemons, query, [debouncedValue, n]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const submiting = (values: IValues) => {
    setQuery((state: IQuery) => ({
      ...state,
      ...values,
    }));
    setN(`${Object.values(values)}${Object.keys(values)}`);
  };

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contextWrap}>
        <Heading tag="h3" className={s.title}>
          {data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input type="text" value={searchValue} onChange={handleSearchChange} id="name" />
        <InputFilter onSubmit={submiting} />
        <div>{isTypesLoading ? <Loader /> : types?.map((item) => <span key={item}>{item}, </span>)}</div>
        <div className={s.pokemonCardsWrap}>
          {data &&
            data.pokemons.map((pokemon: PokemonRequest) => (
              <A key={pokemon.id} href={`pokedex/${pokemon.id}`}>
                <PokemonCard {...pokemon} />
              </A>
            ))}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
