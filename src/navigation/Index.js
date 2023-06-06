import React from 'react';
import {AuthUserProvider} from '../context/AuthUserProvider';
import {FlowerProvider} from '../context/FlowerProvider';
import Routes from './Routes';

// import { Container } from './styles';

const Providers = () => {
  return (
    <AuthUserProvider>
      <FlowerProvider>
        <Routes />
      </FlowerProvider>
    </AuthUserProvider>
  );
};

export default Providers;
