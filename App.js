import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Forgot from './src/screens/Forgot';
import {colors} from './src/assets/colors';
import Preload from './src/screens/Preload';
import User from './src/screens/User';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={colors.primaryDark} />
      <Stack.Navigator initialRouteName="Preload">
        <Stack.Screen name="Entrar" component={SignIn} options={signInStyle} />
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={preloadStyle}
        />
        <Stack.Screen name="Home" component={Home} options={homeStyle} />
        <Stack.Screen name="EditaUser" component={User} options={userStyle} />
        <Stack.Screen name="SignUp" component={SignUp} options={signUpStyle} />
        <Stack.Screen name="Forgot" component={Forgot} options={forgotStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const signInStyle = {
  title: 'Entrar',
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: {color: 'white'},
};
const homeStyle = {
  title: 'Home',
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: {color: 'white'},
};
const signUpStyle = {
  title: 'Criar nova conta',
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};
const forgotStyle = {
  title: 'Recuperar senha',
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};
const preloadStyle = {
  headerShown: false,
  // title: 'Recuperar senha',
  // headerStyle: {backgroundColor: colors.primary},
  // headerTitleStyle: {color: 'white'},
};
const userStyle = {
  title: 'Editar usuário',
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};
