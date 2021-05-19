import React from 'react';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { pokemons } from './Pokemons';
import s from './PokedexPage.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contextWrap}>
        <Heading tag="h3" className={s.title}>
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.search}>Encuentra tu pokemon</div>
        <div className={s.pokemonCardsWrap}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
