import React from 'react';
import {AuthUserProvider} from '../context/AuthUserProvider';
import {FlowerProvider} from '../context/FlowerProvider';
import Navigator from './Navigator';

// import { Container } from './styles';

const Providers = () => {
  return (
    <AuthUserProvider>
      <FlowerProvider>
        <Navigator />
      </FlowerProvider>
    </AuthUserProvider>
  );
};

export default Providers;
