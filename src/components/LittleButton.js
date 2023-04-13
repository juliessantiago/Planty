import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const LittleButton = ({entrar}) => {
  return (
    <View style={style.entrar}>
      <TouchableHighlight onPress={entrar}>
        <Text style={{color: 'white', fontSize: 20}}>Entrar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default LittleButton;

const style = StyleSheet.create({
  entrar: {
    //backgroundColor: '#FF1493', //Por que não está conseguindo chegar a colors?
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderColor: '#A7095D',
    textShadowColor: 'black',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 90,
    paddingRight: 90,
    margin: 12,
  },
});
