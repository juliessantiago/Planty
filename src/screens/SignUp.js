import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

// import { Container } from './styles';
//APLICAR ESTILO! 
const SignUp = ({navigation}) => {
  return (
    <View style={style.pageSignUp}>
      <Text style={style.text}>Crie sua conta</Text>
      {/* <Button title="Tela Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
};

export default SignUp;

const style = StyleSheet.create({
  pageSignUp: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.primaryDark,
    fontSize: 40,
  },
  button: {
    width: '50%',
  },
});
