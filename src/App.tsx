import React from 'react';
import cn from 'classnames';
import css from './App.module.scss';

const App = () => {
  console.log('####: Some log');
  console.log('####: create for check git commit operation');
  return <div className={cn(css.header, css.color)}>Hi! This is App Component!</div>;
};

export default App;
