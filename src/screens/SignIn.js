import React from 'react';
import {View, Text, Button, StyleSheet, Image, TextInput} from 'react-native';
import {colors} from '../assets/colors';
// import {ButtonEntrar} from '../components/ButtonEntrar';

const entrar = () => {
  alert('entrar no sistema');
};
const SignIn = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.top}>
        <Text>Parte de cima</Text>
        <Image
          style={style.image}
          source={require('.././assets/images/signIn.png')}
          accessibilityLabel="logo do signIn"
        />
        <TextInput style={style.input} />
        <TextInput style={style.input} />
        <Text style={style.labels}>Esqueceu sua senha?</Text>

        {/* <ButtonEntrar onPress={entrar}/> */}

        <Button
          onPress={entrar}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <View style={style.bottom}>
        <View>
          <Text>Não possui uma conta? </Text>
          <Text>Cadastre-se</Text>
        </View>
      </View>
    </View>
  );
};
export default SignIn;

const style = StyleSheet.create({
  container: {
    //backgroundColor: '#FE9A2E',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  top: {
    backgroundColor: '#f1f1f1',
    flex: 5,
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: '#F3F781',
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 150,
    margin: 8,
  },
  input: {
    width: '90%',
    height: 50,
    borderBottomColor: colors.inputColor,
    borderBottomWidth: 2,
    fontSize: 18,
    padding: 12,
    paddingBottom: 10,
  },
  labels: {
    paddingTop: 20,
    color: colors.primaryDark,
    fontSize: 18,
  },
  entrar: {
    backgroundColor: colors.primary,
    borderRadius: 28,
    borderColor: colors.primaryDark,
    textShadowColor: 'black',
    padding: 20,
    margin: 12,
    color: '#f1f1f1',
  },
});
