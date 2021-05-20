import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <Heading tag="h1">This is empty page for {title}</Heading>
    </div>
  );
};

export default EmptyPage;
