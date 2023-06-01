import React from 'react';
import {AuthUserProvider} from '../context/AuthUserProvider';
import Routes from './Routes';

// import { Container } from './styles';

const Providers = () => {
  return (
    <AuthUserProvider>
      <Routes />
    </AuthUserProvider>
  );
};

export default Providers;
