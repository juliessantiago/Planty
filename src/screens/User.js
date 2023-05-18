import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

// import { Container } from './styles';

const User = ({route}) => {
  const [nome, setNome] = useState('teste');
  const [email, setEmail] = useState('teste');
  //console.log(props.route.params.user);

  useEffect(() => {
    setNome(route.params.user.nome);
    setEmail(route.params.user.email);
  }, []);

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Nome Completo"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <TextInput
        style={style.input}
        placeholder="Email"
        keyboardType="email-address"
        editable={false}
        value={email}
      />
    </View>
  );
};

export default User;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    //flexDirection: 'row',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  input: {
    width: '80%',
    height: 50,
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 12,
    paddingBottom: 10,
  },
});
