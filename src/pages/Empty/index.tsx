import React from 'react';

import Heading from '../../components/Heading';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Heading tag="h1">This is empty page for {title}</Heading>
    </div>
  );
};

export default EmptyPage;
