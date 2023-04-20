import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../assets/colors';

// import { Container } from './styles';

const Home = ({navigation}) => {
  console.log(navigation.navigate)
  return (
    <View style={style.pageHome}>
      <Text style={style.text}>Telinha Home</Text>
    </View>
  );
};
export default Home;

const style = StyleSheet.create({
  pageHome: {
    backgroundColor: 'white',
    height: '100%',
  },
  text:{
    color: colors.primaryDark, 
    fontSize: 20,
  },
  button: {
    width: '50%',
  }
});
