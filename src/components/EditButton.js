import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const EditButton = ({editar}) => {
  return (
    <View style={style.editar}>
      <TouchableHighlight
        underlayColor={'transparent'}
        style={style.button}
        onPress={editar}>
        <Text style={{color: 'white', fontSize: 12}}>Enviar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EditButton;
const style = StyleSheet.create({
  editar: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    //borderColor: 'green',
    textShadowColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 12,
  },
});
