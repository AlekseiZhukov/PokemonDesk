import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styleButton?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, styleButton = 'mainButton' }) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.mainButton]: styleButton === 'mainButton',
        [s.smallGreenButton]: styleButton === 'smallGreenButton',
        [s.smallBlueButton]: styleButton === 'smallBlueButton',
        [s.mainYellowButton]: styleButton === 'mainYellowButton',
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
