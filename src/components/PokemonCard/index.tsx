import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface TPokemonCardProps {
  name: string;
  stats: {
    [n: string]: number;
  };
  types: [string, string?];
  img: string;
}

const Index: React.FC<TPokemonCardProps> = ({ ...props }) => {
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
            <span
              key={type}
              className={cn(s.label, {
                [s.lableStileDarkRock]: type === 'stile' || type === 'dark' || type === 'rock',
                [s.lableGrassBug]: type === 'grass' || type === 'bug',
                [s.lableIceWater]: type === 'water' || type === 'ice',
                [s.lableNormalGosth]: type === 'normal' || type === 'gosth',
                [s.lablePosionPsychicFairyGhost]:
                  type === 'poison' || type === 'psychic' || type === 'fairy' || type === 'ghost',
                [s.lableGround]: type === 'ground',
                [s.lableElectric]: type === 'electric',
              })}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default Index;
