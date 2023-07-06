import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import {colors} from '../../assets/colors';

// import { Container } from './styles';

const Item = ({item, onPress}) => {
  //console.log(item);
  return (
    <View style={style.container}>
      <TouchableHighlight
        style={style.button}
        onPress={onPress}
        underlayColor={colors.primaryDark}>
        <>
          <View style={style.containerImg}>
            <Image
              style={style.image}
              source={require('../../assets/images/flor_generica.png')}
              accessibilityLabel="flor"
            />
          </View>
          <Text style={style.textNome}>Flor: {item.nome}</Text>
          <Text style={style.textEmail}>Cor: {item.cor}</Text>
          <Text style={style.textEmail}>Plantio: {item.inicio_plantio}</Text>
          <Text style={style.textEmail}>Latitude: {item.latitude}</Text>
          <Text style={style.textEmail}>Longitude: {item.longitude}</Text>
        </>
      </TouchableHighlight>
    </View>
  );
};

export default Item;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  button: {
    //button é o item em si
    backgroundColor: 'rgba(255, 125, 194, 0.5)',
    borderRadius: 8,
    width: 180,
    height: 180,
    textShadowColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    textAlign: 'center',
  },
  textNome: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  textEmail: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 8,
    width: 60,
    height: 60,
  },
});
