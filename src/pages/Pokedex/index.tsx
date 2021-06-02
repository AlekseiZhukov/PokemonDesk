import React, { useState } from 'react';
import { A } from 'hookrouter';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import { IPokemons, PokemonRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import s from './PokedexPage.module.scss';
// import InputFilter from "../../components/Filter";

interface IQuery {
  name?: string;
  limit?: number;
  attack_from?: number;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchAttackToValue, setSearchAttackToValue] = useState('');
  const [searchAttackFromValue, setSearchAttackFromValue] = useState('');

  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 1000);
  const debouncedAttackToValue = useDebounce(searchAttackToValue, 1000);
  const debouncedAttackFromValue = useDebounce(searchAttackFromValue, 1000);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [
    debouncedValue,
    debouncedAttackToValue,
    debouncedAttackFromValue,
  ]);

  /* const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

      setSearchValue(e.target.value);
      setQuery((state: IQuery) => ({
        ...state,
        name: e.target.value,
      }));
  }; */

  const handleSearchAttackToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idInput = e.target.id;
    switch (idInput) {
      case 'name':
        setSearchValue(e.target.value);
        setQuery((state: IQuery) => ({
          ...state,
          [e.target.id]: e.target.value,
        }));
        break;

      case 'attack_to':
        setSearchAttackToValue(e.target.value);
        setQuery((state: IQuery) => ({
          ...state,
          [e.target.id]: e.target.value,
          limit: 100,
        }));
        break;
      case 'attack_from':
        setSearchAttackFromValue(e.target.value);
        setQuery((state: IQuery) => ({
          ...state,
          [e.target.id]: e.target.value,
          limit: 100,
        }));
        break;
      default:
        console.log('#### handleSearchAttackToChange no such case');
    }
  };

  /* const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setN(e.target.value)
    setQuery((state: IQuery) => ({
      ...state,
    [e.target.id]: e.target.value,
      limit: 100
    }));

  } */

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
        <input type="text" value={searchValue} onChange={handleSearchAttackToChange} id="name" />
        <div className={s.filterInputWraper}>
          <label className={s.filterLabelInput} htmlFor="attack_from">
            attack from:
            <input
              className={s.filterInput}
              type="number"
              value={searchAttackFromValue}
              onChange={handleSearchAttackToChange}
              id="attack_from"
            />
          </label>
          <label className={s.filterLabelInput} htmlFor="attack_to">
            attack to:
            <input
              className={s.filterInput}
              type="number"
              value={searchAttackToValue}
              onChange={handleSearchAttackToChange}
              id="attack_to"
            />
          </label>
        </div>

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
