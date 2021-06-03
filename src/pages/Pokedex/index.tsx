import React, { useState } from 'react';
import { A } from 'hookrouter';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { IPokemons, PokemonRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import s from './PokedexPage.module.scss';
import InputFilter from '../../components/Filter';

interface IQuery {
  [n: string]: string | number;
}

interface IValues {
  [n: string]: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [n, setN] = useState('');

  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue, n]);
  console.log('useData IPokemons', n);
  console.log('useData IPokemons', query);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const submiting = (values: IValues) => {
    console.log('submit on Pokedex', values);

    setQuery((state: IQuery) => ({
      ...state,
      ...values,
    }));
    setN(`${Object.values(values)}${Object.keys(values)}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Som error...</div>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contextWrap}>
        <Heading tag="h3" className={s.title}>
          {data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <input type="text" value={searchValue} onChange={handleSearchChange} id="name" />
        <InputFilter onSubmit={submiting} />

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
