import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {colors} from './src/assets/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={colors.primaryDark} />
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Entrar" component={SignIn} options={signInStyle} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nova conta" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const signInStyle = {
  headerStyle: {backgroundColor: colors.primary}, 
  headerTitleStyle: {color: 'white'},
};
