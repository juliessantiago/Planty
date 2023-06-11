import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, ToastAndroid} from 'react-native';
import {colors} from '../../assets/colors';
import EditButton from '../../components/EditButton';
import firestore from '@react-native-firebase/firestore';

const Flower = ({route, navigation}) => {
  const [nome, setNome] = useState(' ');
  const [cor, setCor] = useState(' ');
  const [plantio, setPlantio] = useState(' ');
  const [uid, setUid] = useState(' ');

  useEffect(() => {
    //console.log(route.params.flower);
    setNome(route.params.flower.nome);
    setCor(route.params.flower.cor);
    setPlantio(route.params.flower.plantio);
    setUid(route.params.flower.id);
  }, []); //dados da flor serão trazidos na montagem do componente

  const showToastWithGravity = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      30,
      30,
    );
  };

  const editarFlor = () => {
    firestore()
      .collection('flowers')
      .doc(uid)
      .set(
        {
          nome: nome,
          cor: cor,
          plantio: plantio,
        },
        {merge: true},
      )
      .then(() => {
        setNome(' ');
        setCor(' ');
        setPlantio(' ');
        showToastWithGravity('Flor atualizada com sucesso!');
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="nome"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={text => setNome(text)}
        value={nome}
      />

      <TextInput
        style={style.input}
        placeholder="cor"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={text => setCor(text)}
        value={cor}
      />

      <TextInput
        style={style.input}
        placeholder="plantio"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={text => setPlantio(text)}
        value={plantio}
      />
      <EditButton editar={editarFlor} />
    </View>
  );
};

export default Flower;
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
    color: 'gray',
  },
});
