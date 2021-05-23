import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import s from './PokedexPage.module.scss';
import req from '../../utils/request';

const usePokemons = () => {
  interface IUseState {
    pokemons: [];
    total: number;
  }
  const [data, setData] = useState<IUseState>({ pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);

      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setIsError(false);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Som error...</div>;
  }

  interface IPokemon {
    name_clean: string;
    abilities: [];
    stats: {
      hp: number;
      attack: number;
      defense: number;
      'special-attack': number;
      'special-defense': number;
      speed: number;
    };
    types: [string, string?];
    img: string;
    name: string;
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    order: number;
    weight: number;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contextWrap}>
        <Heading tag="h3" className={s.title}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.search}>Encuentra tu pokemon</div>
        <div className={s.pokemonCardsWrap}>
          {data.pokemons.map((pokemon: IPokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
