import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {StatusBar} from 'react-native';
import Users from '../screens/Users';
import User from '../screens/User';
import {colors} from '../assets/colors';
import Preload from '../screens/Preload';
import Flowers from '../screens/Flowers';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';

import Flower from '../screens/Flower/index';
import Home from '../screens/Home/index';
import Seeds from '../screens/Seeds/index';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => (
  // // <NavigationContainer>
  //   <StatusBar animated={true} backgroundColor={colors.primaryDark} />
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      // headerTintColor: 'green',
      // headerRight: () => () => <LogoutButton />,
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: () => (
          <Ionicons name="home-outline" color={colors.primaryDark} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Users"
      component={Users}
      options={{
        tabBarLabel: 'Usuários',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: () => (
          <Ionicons
            name="people-outline"
            color={colors.primaryDark}
            size={28}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Flowers"
      component={Flowers}
      options={{
        tabBarLabel: 'Flores',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: () => (
          <Ionicons
            name="flower-outline"
            color={colors.primaryDark}
            size={28}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Seeds"
      component={Seeds}
      options={{
        tabBarLabel: 'Sementes',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: () => (
          <Ionicons name="leaf-outline" color={colors.primaryDark} size={28} />
        ),
      }}
    />
  </Tab.Navigator>
  // </NavigationContainer>
);

const AuthStack = () => (
  // <StatusBar animated={true} backgroundColor={colors.primaryDark} />
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
      // headerTintColor: 'green',
      // headerRight: () => () => <LogoutButton />,
    }}>
    <Stack.Screen name="Preload" component={Preload} options={preloadStyle} />
    <Stack.Screen name="Entrar" component={SignIn} options={signInStyle} />
    <Stack.Screen name="SignUp" component={SignUp} options={signUpStyle} />
    <Stack.Screen name="Forgot" component={Forgot} />
  </Stack.Navigator>
);

const Navigator = () => (
  <NavigationContainer>
    <StatusBar backgroundColor={colors.primaryDark} />
    <Stack.Navigator
      initialRouteName="AppStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="AppStack" component={AppStack} />
      <Stack.Screen name="Flower" component={Flower} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Navigator;

const preloadStyle = {
  headerShown: false,
  // title: 'Recuperar senha',
  // headerStyle: {backgroundColor: colors.primary},
  // headerTitleStyle: {color: 'white'},
};

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
