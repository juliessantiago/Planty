import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

// import { Container } from './styles';

const Item = ({title, onPress}) => {
  return (
    <View style={style.container}>
      <TouchableHighlight
        style={style.button}
        onPress={onPress}
        underlayColor={colors.primaryDark}>
        <>
          <Text style={style.text}>{title}</Text>
          {/* <Text>{item.name}</Text>
          <Text>{item.email}</Text> */}
        </>
      </TouchableHighlight>
    </View>
  );
};

export default Item;

const style = StyleSheet.create({
  container: {
    //marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 80,
    //borderColor: 'green',
    textShadowColor: 'black',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
