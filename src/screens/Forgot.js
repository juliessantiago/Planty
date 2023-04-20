import {React, useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import {colors} from '../assets/colors';
import RecoveryButton from '../components/RecoveryButton';
import auth from '@react-native-firebase/auth';

const Forgot = ({navigation}) => {
  const [email, setEmail] = useState(' ');

  const recuperar = () => {
    if (email !== ' ') {
      //console.log(email);
      auth()
        .sendPasswordResetEmail(email)
        .then(response => {
          Alert.alert('Olá, Usuário! ', 'Enviamos um e-mail de recuperação', [
            {
              text: 'Entendi!',
              onPress: () => navigation.goBack(), //retorna para tela de login
            },
          ]);
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/user-not-found':
              Alert.alert('Opa! ', 'Seu e-mail não foi encontrado');
              break;
            case 'auth/invalid-email':
              Alert.alert(
                'Oops!',
                'Insira um formato como "seunome@suaempresa.com',
              );
              break;
            case 'auth/user-disabled':
              Alert.alert('Pedimos desculpas', 'Seu usuário foi inativado');
              break;
          }
        });
    } else {
      Alert.alert('Oops!', 'Informe seu e-mail');
    }
  };
  return (
    <View style={style.pageForgot}>
      <TextInput
        style={style.input}
        placeholder="email"
        keyboardType="email-address"
        returnKeyType="go"
        onChangeText={text => setEmail(text)}
        autoFocus={true}
      />
      <RecoveryButton entrar={recuperar} />
    </View>
  );
};

export default Forgot;

const style = StyleSheet.create({
  pageForgot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '60%',
    height: 50,
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 12,
    paddingBottom: 10,
  },
});
