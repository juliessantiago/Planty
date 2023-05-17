import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {colors} from '../assets/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

const Preload = ({navigation}) => {
  const getUserCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user'); //precisa ser a mesma chave definida lá no signIn
      console.log('getUserCache' + jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log('Não foi possível recuperar usuário cacheado' + error);
    }
  };

  const loginUser = async () => {
    const user = await getUserCache();
    if (user) {
      //console.log(user.pass);
      //Usuário está cacheado
      auth()
        .signInWithEmailAndPassword(user.email, user.pass)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/user-not-found':
              Alert.alert('Opa!', 'Não encontramos seu e-mail');
              break;
            case 'auth/wrong-password':
              Alert.alert('Houston, we have a problem!', 'Senha incorreta');
              break;
            case 'auth/invalid-email':
              Alert.alert(
                'Oops!',
                'Insira um formato como "seunome@suaempresa.com',
              );
              break;
            case 'auth/user-disabled':
              Alert.alert('Pedimos desculpas', 'Seu usuário está inativado');
              break;
          }
        });
    } else {
      //Usuário não foi cacheado, então é preciso fazer login
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Entrar'}],
        }),
      );
    }
  };
  useEffect(() => {
    loginUser();
  }),
    [];
  return (
    <View style={style.pagePreload}>
      {/* <Image
        style={style.image}
        source={require('.././assets/images/lotus.png')}
        accessibilityLabel="logo do signIn"
      /> */}
      <Text style={style.nameApp}>Aguarde...</Text>
    </View>
  );
};

export default Preload;

const style = StyleSheet.create({
  pagePreload: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  image: {
    width: 150,
    height: 150,
  },
  nameApp: {
    color: colors.primaryDark,
    fontSize: 40,
    marginTop: 10,
  },
});
