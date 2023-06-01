import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

const Preload = ({navigation}) => {
  const getUserCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user'); //precisa ser a mesma chave definida lá no signIn
      //console.log('getUserCache' + jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log('Não foi possível recuperar usuário cacheado' + error);
    }
  };

  const loginUser = async () => {
    const user = await getUserCache();
    if (user) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Users'}],
        }),
      );
      //console.log(user.pass);
      //Usuário está cacheado
      // auth()
      //   .signInWithEmailAndPassword(user.email, user.pass)
      //   .then(() => {
      //lógica de redirecionamento para users foi retirada daqui porque
      //Routes (navigation) já está escutando a autenticação no banco
      //se usuário ainda tem sessão, a Routes direciona já pra página correta
      //   })
      //   .catch(error => {
      //     switch (error.code) {
      //       case 'auth/user-not-found':
      //         Alert.alert('Opa!', 'Não encontramos seu e-mail');
      //         break;
      //       case 'auth/wrong-password':
      //         Alert.alert('Houston, we have a problem!', 'Senha incorreta');
      //         break;
      //       case 'auth/invalid-email':
      //         Alert.alert(
      //           'Oops!',
      //           'Insira um formato como "seunome@suaempresa.com',
      //         );
      //         break;
      //       case 'auth/user-disabled':
      //         Alert.alert('Pedimos desculpas', 'Seu usuário está inativado');
      //         break;
      //     }
      //   });
    } else {
      //Usuário não foi cacheado, então é preciso fazer login
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{name: 'Entrar'}],
      //   }),
      // );
    }
    //tudo relacionado a stacks foi deixado sob responsabilidade de routes
    //se esta logado -> appStack, se não está -> authStack
  };
  useEffect(() => {
    loginUser();
  }),
    [];
  return (
    <View style={style.pagePreload}>
      <Image
        style={style.image}
        source={require('.././assets/images/plantar.png')}
        accessibilityLabel="logo do signIn"
      />
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
