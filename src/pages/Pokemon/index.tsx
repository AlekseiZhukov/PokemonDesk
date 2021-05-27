import React from 'react';
import cn from 'classnames';
import useData from '../../hook/getData';
import { PokemonRequest } from '../../interface/pokemons';
import Heading from '../../components/Heading';

import s from './PokemonPage.module.scss';

export interface IPokemonProps {
  id: number | string;
}

const Pokemon: React.FC<IPokemonProps> = ({ id }) => {
  const { data, isLoading, isError } = useData<PokemonRequest>('getPokemon', {}, [], id);

  const { name, stats, types, img, abilities, base_experience } = { ...data };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Som error...</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading tag="h3" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.abilities}>
          <Heading tag="p">Abilities</Heading>
          <Heading tag="p">
            {abilities && abilities[0]} - {abilities && abilities[1]}
          </Heading>
        </div>
        <div className={s.healthyWrap}>
          <div className={s.healthyPoints}>
            <Heading tag="p">Healthy Points</Heading>
            <Heading tag="p">{stats && stats.hp}</Heading>
            {stats ? <div className={s.scales} style={{ width: `calc(${stats.hp} * 100% / 255)` }} /> : null}
          </div>
          <div className={s.healthyPoints}>
            <Heading tag="p">Experience</Heading>
            <Heading tag="p">{base_experience && base_experience}</Heading>
            {base_experience ? (
              <div className={s.scalesExperience} style={{ width: `calc(${base_experience} * 100% / 608)` }} />
            ) : null}
          </div>
        </div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats && stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats && stats.defense}</div>
            Defense
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats && stats['special-attack']}</div>
            Sp Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats && stats['special-defense']}</div>
            Sp Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types &&
            types.map((type) => (
              <span key={type} className={cn(s.label, s[`label${type}` as keyof typeof s])}>
                {type}
              </span>
            ))}
        </div>
      </div>

      <div className={cn(s.pictureWrap, s[`pictureWrap${Math.round(1 + Math.random() * 4)}` as keyof typeof s])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default Pokemon;
