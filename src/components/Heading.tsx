

import React from 'react';

// Define the props interface for the Heading component
interface HeadingProps {
  title: string;  // The title prop should be a string
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold">{title}</h1>  
  );
};

export default Heading;

