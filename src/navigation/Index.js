import React from 'react';
import {AuthUserProvider} from '../context/AuthUserProvider';
import {FlowerProvider} from '../context/FlowerProvider';
import Navigator from './Navigator';
import {ApiProvider} from '../context/ApiProvider';

// import { Container } from './styles';

const Providers = () => {
  return (
    <AuthUserProvider>
      <FlowerProvider>
        <ApiProvider>
          <Navigator />
        </ApiProvider>
      </FlowerProvider>
    </AuthUserProvider>
  );
};

export default Providers;
