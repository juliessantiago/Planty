import React from 'react';
import Users from '../screens/Users';
import User from '../screens/User';
import {colors} from '../assets/colors';
import Preload from '../screens/Preload';
import Flowers from '../screens/Flowers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function  AppStack() {
  return (
    // // <NavigationContainer>
    //   <StatusBar animated={true} backgroundColor={colors.primaryDark} />
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShow: 'true',
        headerStyle: {
          backgroundColor: colors.primary,
          paddingRight: 5,
        },
        // headerTintColor: 'green',
        // headerRight: () => () => <LogoutButton />,
      }}>
      {/* drawerContent={(props) => <CustomDrawerContent {..props} />} */}
      <Stack.Screen name="Preload" component={Preload} options={preloadStyle} />
      <Stack.Screen name="Users" component={Users} options={usersStyle} />
      <Stack.Screen name="EditaUser" component={User} options={userStyle} />
      <Stack.Screen name="Flowers" component={Flowers} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

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
