import React from 'react';

interface HeadingProps {
  tag?: string;
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ tag = 'p', className = null, children }) => {
  return React.createElement(`${tag}`, { className }, children);
};

export default Heading;
