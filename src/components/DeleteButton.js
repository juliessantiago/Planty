import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const DeleteButton = ({excluir}) => {
  return (
    <View style={style.editar}>
      <TouchableHighlight
        underlayColor={'transparent'}
        style={style.button}
        onPress={excluir}>
        <Text style={{color: 'white', fontSize: 20}}>Excluir</Text>
      </TouchableHighlight>
    </View>
  );
};

export default DeleteButton;
const style = StyleSheet.create({
  editar: {
    backgroundColor: colors.primaryDark,
    borderRadius: 10,
    //borderColor: 'green',
    textShadowColor: 'black',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 90,
    paddingRight: 90,
    margin: 12,
  },
});
