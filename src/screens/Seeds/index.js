import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

// import { Container } from './styles';

const Seeds = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Seeds</Text>
    </View>
  );
};

export default Seeds;
const style = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'space-around', //alinhamento vertical
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 18,
    color: colors.primary,
  },
});
