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
        <Text style={{color: 'white', fontSize: 12}}>Excluir</Text>
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 12,
  },
});
