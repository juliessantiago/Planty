import React from 'react';
import Users from '../screens/Users';
import User from '../screens/User';
import {colors} from '../assets/colors';
import Preload from '../screens/Preload';
import Flowers from '../screens/Flowers/Flowers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Flower from '../screens/Flower/index';

const Stack = createNativeStackNavigator();

export default function AppStack() {
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
      <Stack.Screen name="Flowers" component={Flowers} options={flowersStyle} />
      <Stack.Screen name="Flower" compornent={Flower} options={flowerStyle} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

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

const flowersStyle = {
  title: 'Flores',
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

const flowerStyle = {
  title: 'Editar Flor',
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};
