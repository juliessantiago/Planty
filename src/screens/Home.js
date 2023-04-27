import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../assets/colors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Container } from './styles';

const Home = ({navigation}) => {
  //console.log(navigation.navigate);

  const getUserCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user'); //precisa ser a mesma chave definida lá no signIn
      console.log('getUserCache' + jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log('Não foi possível recuperar usuário cacheado' + error);
    }
  };
  getUserCache();

  return (
    <View style={style.pageHome}>
      <Image
        style={style.image}
        source={require('.././assets/images/lotus.png')}
        accessibilityLabel="logo do signIn"
      />
      <Text style={style.nameApp}>Planty</Text>
    </View>
  );
};
export default Home;

const style = StyleSheet.create({
  pageHome: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  text: {
    color: colors.primaryDark,
    fontSize: 40,
  },
  button: {
    width: '50%',
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
