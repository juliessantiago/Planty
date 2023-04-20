import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {colors} from '../assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CreateButton from '../components/CreateButton';

// import { Container } from './styles';
//APLICAR ESTILO!
const SignUp = ({navigation}) => {
  const [nome, setNome] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [pass, setPass] = useState(' ');
  const [confirmpass, setConfirmPass] = useState(' ');
  const criaConta = () => {
    console.log('CRIAR CONTA');
  };
  return (
    <SafeAreaView style={style.pageSignUp}>
      <ScrollView>
        <View style={style.top}>
          <TextInput
            style={style.input}
            placeholder="Nome Completo"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={text => setNome(text)}
          />
          <TextInput
            style={style.input}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            ref={ref => (this.passTextInput = ref)}
            style={style.input}
            placeholder="Senha"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={text => setPass(text)}
          />
          <TextInput
            ref={ref => (this.passTextInput = ref)}
            style={style.input}
            placeholder="Confirme sua Senha"
            keyboardType="default"
            returnKeyType="go"
            onChangeText={text => setConfirmPass(text)}
          />
          <CreateButton entrar={criaConta} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const style = StyleSheet.create({
  pageSignUp: {
    paddingTop: 120,
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.primaryDark,
    fontSize: 40,
  },
  input: {
   //width: '60%',
    height: 50,
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 12,
    paddingBottom: 10,
  },
});
