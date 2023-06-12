import React, {useEffect, useState, useContext} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import {colors} from '../../assets/colors';
import EditButton from '../../components/EditButton';
import {FlowerContext} from '../../context/FlowerProvider';
import LoadingIndicator from '../../components/LoadingIndicator';
import DeleteButton from '../../components/DeleteButton';

const Flower = ({route, navigation}) => {
  const [nome, setNome] = useState(' ');
  const [cor, setCor] = useState(' ');
  const [plantio, setPlantio] = useState(' ');
  const [uid, setUid] = useState(' ');
  // const [loading, setLoading] = useState(true);
  const {saveFlower} = useContext(FlowerContext);

  useEffect(() => {
    //console.log(route.params.flower);
    setNome(route.params.flower.nome);
    setCor(route.params.flower.cor);
    setPlantio(route.params.flower.inicio_plantio);
    setUid(route.params.flower.id);
  }, []); //dados da flor serão trazidos na montagem do componente

  // const showToastWithGravity = message => {
  //   ToastAndroid.showWithGravity(
  //     message,
  //     ToastAndroid.LONG,
  //     ToastAndroid.CENTER,
  //     30,
  //     30,
  //   );
  // };
  const excluirFlor = () => {
    Alert.alert('excluir florzinha');
  };
  const editarFlor = async () => {
    if (nome && cor && plantio) {
      let flower = {};
      flower.uid = uid;
      flower.nome = nome;
      flower.cor = cor;
      flower.inicio_plantio = plantio;
      //setLoading(true);
      await saveFlower(flower);
      navigation.goBack();
      //setLoading(false);
    } else {
      Alert.alert('Atenção ', 'Informe todos os campos');
    }
    // firestore()
    //   .collection('flowers')
    //   .doc(uid)
    //   .set(
    //     {
    //       nome: nome,
    //       cor: cor,
    //       plantio: plantio,
    //     },
    //     {merge: true},
    //   )
    //   .then(() => {
    //     setNome(' ');
    //     setCor(' ');
    //     setPlantio(' ');
    //     showToastWithGravity('Flor atualizada com sucesso!');
    //     navigation.goBack();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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
      <DeleteButton excluir={excluirFlor} />
      {/* {loading && <LoadingIndicator />} */}
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
