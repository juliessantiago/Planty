import React from 'react';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/Users';
import User from '../screens/User';
import {colors} from '../assets/colors';
import Preload from '../screens/Preload';
import Flowers from '../screens/Flowers';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    // // <NavigationContainer>
    //   <StatusBar animated={true} backgroundColor={colors.primaryDark} />
    <Stack.Navigator initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} options={preloadStyle} />
      <Stack.Screen name="Users" component={Users} options={usersStyle} />
      <Stack.Screen name="EditaUser" component={User} options={userStyle} />
      <Stack.Screen name="Flowers" component={Flowers} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default AppStack;

const usersStyle = {
  title: 'Users',
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: {color: 'white'},
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
