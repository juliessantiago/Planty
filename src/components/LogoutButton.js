import React from 'react';
import {TouchableHighlight, View, StyleSheet, Image, Alert} from 'react-native';
import {colors} from '../assets/colors';

// import { Container } from './styles';
const sair = () => {
  Alert.alert('saiu');
};
const LogoutButton = () => {
  return (
    <View>
      <TouchableHighlight
        underlayColor={colors.primaryDark}
        style={style.button}
        onPress={sair}>
        <Image
          style={style.image}
          source={require('.././assets/images/sair.png')}
          accessibilityLabel="botão sair"
        />
      </TouchableHighlight>
    </View>
  );
};

export default LogoutButton;
const style = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryDark,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
