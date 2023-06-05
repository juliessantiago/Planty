import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import {colors} from '../assets/colors';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    // <StatusBar animated={true} backgroundColor={colors.primaryDark} />
    <Stack.Navigator initialRouteName="Entrar">
      <Stack.Screen name="Entrar" component={SignIn} options={signInStyle} />
      <Stack.Screen name="SignUp" component={SignUp} options={signUpStyle} />
      <Stack.Screen name="Forgot" component={Forgot} options={forgotStyle} />
    </Stack.Navigator>
  );
};
export default AuthStack;

const signInStyle = {
  title: 'Entrar',
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
