import React from 'react';

type tagValues = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface HeadingProps {
  tag: tagValues;
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ tag = 'p', className, children }) => {
  return React.createElement(tag, { className }, children);
};

export default Heading;
