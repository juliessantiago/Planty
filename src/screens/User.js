import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, ToastAndroid} from 'react-native';
import {colors} from '../assets/colors';
import EditButton from '../components/EditButton';
import firestore from '@react-native-firebase/firestore';

const User = ({route, navigation}) => {
  const [nome, setNome] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [uid, setUid] = useState(' ');

  //console.log('params.user.nome ' + route.params.user.nome);

  useEffect(() => {
    setNome(route.params.user.nome);
    setEmail(route.params.user.email);
    setUid(route.params.user.id);
  }, []);

  const showToastWithGravity = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      30,
      30,
    );
  };
  const editar = () => {
    firestore()
      .collection('users')
      .doc(uid)
      .set(
        {
          nome: nome, //valor nome vem da state
        },
        {merge: true},
      )
      .then(() => {
        setNome(' ');
        setEmail(' ');
        setUid(' ');
        showToastWithGravity('Dados atualizados com sucesso');
        navigation.goBack();
      })
      .catch(error => {
        console.log('Erro - não foi possível alterar o usuário ' + error);
      });
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
    marginTop: 80,
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
