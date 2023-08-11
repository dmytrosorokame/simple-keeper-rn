import React from 'react';

import WithHeading from '../../components/generic/WithHeading';
import Button from '../../components/shared/Button';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = () => {
  return (
    <WithHeading style={{ width: '100%', paddingHorizontal: 20 }}>
      <Button>Click me</Button>
    </WithHeading>
  );
};

export default HomeScreen;
