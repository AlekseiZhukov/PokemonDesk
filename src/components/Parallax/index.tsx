import React, { useEffect, useState } from 'react';
import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';
import PokeBallPng from './assets/PokeBall2.png';
import s from './Parallax.module.scss';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    setScreenX(event.screenX);
    setScreenY(event.screenY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={s.root}>
      <div className={s.smallPokeBall}>
        <img
          src={SmallPokeBallPng}
          style={{
            transform: `translate(${screenY * 0.02}px, ${screenX * 0.02}px)`,
          }}
          alt="Small PokeBall"
        />
      </div>
      <div className={s.cloud}>
        <img
          src={CloudPng}
          style={{
            transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`,
          }}
          alt="Cloud PokeBall"
        />
      </div>
      <div className={s.cloudBig}>
        <img
          src={CloudBigPng}
          style={{
            transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`,
          }}
          alt="Cloud Big PokeBall"
        />
      </div>
      <div className={s.pokeBall}>
        <img
          src={PokeBallPng}
          style={{
            transform: `translate(${screenY * 0.03}px, ${screenX * 0.03}px)`,
          }}
          alt="Big PokeBall"
        />
      </div>
      <div className={s.pikachu}>
        <img
          src={PikachuPng}
          style={{
            transform: `translate(${screenY * 0.05}px, ${screenX * 0.01}px)`,
          }}
          alt="Cloud PokeBall"
        />
      </div>
    </div>
  );
};

export default Parallax;
