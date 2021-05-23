import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';
import { LinkEnum } from '../../routes';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1">
            Find <span>all your favorite</span> Pokemon
          </Heading>
          <Heading tag="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
