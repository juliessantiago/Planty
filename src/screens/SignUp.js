import React from 'react';
import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

const SignUp = ({navigation}) => {
  return(
    <View>
      <Text>Inscreva-se</Text>
      <Button title="Tela Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default SignUp;