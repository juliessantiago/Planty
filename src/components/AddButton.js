import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const AddButton = ({adicionar}) => {
  return (
    <View style={style.adicionar}>
      <TouchableHighlight
        underlayColor={'transparent'}
        style={style.button}
        onPress={adicionar}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          +
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default AddButton;
const style = StyleSheet.create({
  adicionar: {
    alignSelf: 'flex-end',
    width: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    //borderColor: 'green',
    textShadowColor: 'black',
    padding: 6,
    margin: 12,
    marginRight: 40,
  },
});
