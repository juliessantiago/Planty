import React from 'react';
import { View } from 'react-native';
import { AuthUserProvider } from '../context/AuthUserProvider';

// import { Container } from './styles';

const Providers = () => {
  return (
    <AuthUserProvider>
        <Routes />
    </AuthUserProvider>
  );
}

export default Providers;