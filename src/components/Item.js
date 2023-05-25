import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

// import { Container } from './styles';

const Item = ({item, onPress}) => {
  //console.log(item.nome, item.email);
  return (
    <View style={style.container}>
      <TouchableHighlight
        style={style.button}
        onPress={onPress}
        underlayColor={colors.primaryDark}>
        <>
          <Text style={style.textNome}>{item.nome}</Text>
          <Text style={style.textEmail}>{item.email}</Text>
        </>
      </TouchableHighlight>
    </View>
  );
};

export default Item;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  button: {
    //button é o item em si
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    width: 250,
    height: 90,
    //borderColor: 'green',
    textShadowColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  textNome: {
    color: 'white', //não está funcionando
    textAlign: 'center',
    fontSize: 14,
  },
  textEmail: {
    color: 'white', //não está funcionando
    textAlign: 'center',
    fontSize: 12,
  },
});
