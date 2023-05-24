import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';
import EditButton from '../components/EditButton';

// import { Container } from './styles';

const User = ({route}) => {
  const [nome, setNome] = useState('teste');
  const [email, setEmail] = useState('teste');
  //console.log('params.user.nome ' + route.params.user.nome);

  useEffect(() => {
    setNome(route.params.user.nome);
    setEmail(route.params.user.email);
  }, []);

  const editar = () => {
    alert('edição');
  };
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

      <EditButton editar={editar} />
    </View>
  );
};

export default User;

const style = StyleSheet.create({
  container: {
    //marginTop: 60,
    //flexDirection: 'row',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  input: {
    width: '80%',
    height: 50,
    borderBottomColor: colors.primaryDark,
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 12,
    paddingBottom: 10,
  },
});
