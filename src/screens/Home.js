import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import { Container } from './styles';

const Home = ({navigation}) => {
  return (
    <View style={style.pageHome}>
      <Text style={style.text}>Home Screen</Text>
      <Button
        style={style.button}
        title="SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  )
}
export default Home;

const style = StyleSheet.create({
  pageHome: {
    backgroundColor: '#F08080',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    // height: '100%',
  },
});