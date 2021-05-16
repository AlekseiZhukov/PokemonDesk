import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading tag="h1">
            Find <span>all your favorite</span> Pokemon
          </Heading>
          <Heading tag="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => console.log('Click Button!')}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Heading className={s.contentWrap}>Что то тут написано</Heading>
      <Button onClick={() => console.log('Click Button smallBlueButton!')} styleButton="smallBlueButton">
        See
      </Button>
      <Button onClick={() => console.log('Click Button smallGreenButton!')} styleButton="smallGreenButton">
        See
      </Button>
      <Button onClick={() => console.log('Click Button mainYellowButton!')} styleButton="mainYellowButton">
        See
      </Button>
    </div>
  );
};

export default HomePage;
