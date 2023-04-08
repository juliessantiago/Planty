import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// import { Container } from './styles';

const SignIn = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.superior}>
        <Text>Parte de cima</Text>
      </View>
      <View style={style.inferior}>
        <Text>Parte de baixo</Text>
      </View>
    </View>
  )
}
export default SignIn;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FE9A2E',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  superior:{
    backgroundColor: '#FE2E64',
    flex: 5, 
    alignItems: 'center', 
  }, 
  inferior: {
    backgroundColor: '#F3F781', 
    flex: 1, 
    alignItems: 'center',
    marginTop: 30,
  },
});