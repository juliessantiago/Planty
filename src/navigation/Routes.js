import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthUserContext} from '../context/AuthUserProvider';
import auth from '@react-native-firebase/auth';

const Routes = () => {
  const {user, setUser} = useContext(AuthUserContext);
  useEffect(() => {
    const listener = auth().onAuthStateChanged(authUser => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return listener; //desligando o listener de estado de autenticação ao desmontar o componente
  }, []);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
      {/* se user existir, mostra screens do app, se não houver user, mostra screen de autenticação */}
    </NavigationContainer>
  );
};

export default Routes;
