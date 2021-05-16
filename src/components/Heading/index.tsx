import React from 'react';

interface HeadingProps {
  tag?: string;
}
const Heading: React.FC<HeadingProps> = ({ children, tag = 'p', ...props }) => {
  return React.createElement(`${tag}`, props, children);
};

export default Heading;
