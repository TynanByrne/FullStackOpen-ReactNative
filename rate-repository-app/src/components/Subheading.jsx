import React from 'react';

import Text from './Text';

const Subheading = ({ text }) => {
  return (
    <>
      <Text fontWeight='bold' fontSize='subheading'>
        {text}
      </Text>
    </>
  );
};

export default Subheading;