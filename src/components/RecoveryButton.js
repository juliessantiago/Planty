import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const RecoveryButton = ({entrar}) => {
  return (
    <View style={style.entrar}>
      <TouchableHighlight onPress={entrar} underlayColor={'transparent'}>
        <Text style={{color: 'white', fontSize: 20}}>Recuperar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default RecoveryButton;

const style = StyleSheet.create({
  entrar: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderColor: 'green',
    textShadowColor: 'black',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 90,
    paddingRight: 90,
    margin: 12,
  },
});
