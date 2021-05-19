import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';

import teamRocket from './asset/teamRocket.png';
import { LinkEnum } from '../../routes';

import s from './NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading tag="p" className={s.text404}>
          404
        </Heading>
        <img src={teamRocket} alt="rocket team" className={s.img} />
        <Heading tag="h3" className={s.string}>
          <span>The rocket team</span> has won this time.
        </Heading>
        <Button styleButton="mainYellowButton" onClick={() => navigate(LinkEnum.HOME)}>
          return{' '}
        </Button>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
