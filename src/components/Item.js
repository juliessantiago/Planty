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
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
    width: 180,
    height: 80,
    //borderColor: 'green',
    textShadowColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 12,
  },
  textNome: {
    color: 'white', //não está funcionando
    textAlign: 'center',
    fontSize: 18,
  },
  textEmail: {
    color: 'white', //não está funcionando
    textAlign: 'center',
    fontSize: 14,
  },
});
