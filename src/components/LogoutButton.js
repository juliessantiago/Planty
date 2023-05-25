import React from 'react';
import {TouchableHighlight, View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';

// import { Container } from './styles';
const sair = () => {
  AsyncStorage.removeItem('user')
    .then(() => {
      auth()
        .signOut()
        .then(() => {
          console.log('User removido, retornou a login');
        })
        .catch(error => {
          console.log('erro no auth SignOut');
        });
      RNRestart.Restart();
    })
    .catch(error => {
      console.log('erro no removeItem do AsyncSorage');
    });
};
const LogoutButton = () => {
  return (
    <View style={style.container}>
      <TouchableHighlight
        underlayColor={'transparent'}
        style={style.button}
        onPress={sair}>
        <Image
          style={style.image}
          source={require('.././assets/images/sair.png')}
          accessibilityLabel="botão sair"
        />
      </TouchableHighlight>
    </View>
  );
};

export default LogoutButton;
const style = StyleSheet.create({
  button: {
    marginLeft: '60%',
    marginTop: '10%',
  },
  container: {},
  image: {
    //backgroundColor: colors.primaryDark,
    width: 50,
    height: 50,
  },
});
