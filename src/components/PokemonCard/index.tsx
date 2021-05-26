import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';
import { PokemonRequest } from '../../interface/pokemons';

const Index: React.FC<PokemonRequest> = ({ ...props }) => {
  const { name, stats, types, img } = { ...props };
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading tag="h4" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
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

export default Index;
