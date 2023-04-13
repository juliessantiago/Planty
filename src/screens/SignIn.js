import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {colors} from '../assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {ButtonEntrar} from '../components/ButtonEntrar';

const entrar = () => {
  alert('entrar no sistema');
};
const cadastre = () => {
  alert('cadastre-se');
};
const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.top}>
          <Image
            style={style.image}
            source={require('.././assets/images/signIn.png')}
            accessibilityLabel="logo do signIn"
          />
          <TextInput style={style.input} />
          <TextInput style={style.input} />
          <Text style={style.labels}>Esqueceu sua senha?</Text>

          {/* <ButtonEntrar onPress={entrar}/> */}

          {/* Não consigo fazer funcionar o componente próprio */}
          <Button
            onPress={entrar}
            title="Entrar"
            color="#841584"
            accessibilityLabel="Entrar no sistema"
          />
        </View>

        <View style={style.bottom}>
          <View style={style.divOu}>
            <View style={style.line} />
            <Text style={style.textOu}>Ou</Text>
            <View style={style.line} />
          </View>

          <View style={style.divOu}>
            <Text style={style.textBotton}>Não possui uma conta? </Text>
            <Text style={style.textBotton} onPress={cadastre}>
              Cadastre-se
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  top: {
    marginTop: 80,
    backgroundColor: '#f1f1f1',
    flex: 6,
    alignItems: 'center',
  },
  bottom: {
    flex: 3,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 8,
  },
  input: {
    width: '60%',
    height: 50,
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 12,
    paddingBottom: 10,
  },
  labels: {
    paddingTop: 20,
    color: colors.primaryDark,
    fontSize: 12,
    marginBottom: 12,
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
  divOu: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  line: {
    height: 1,
    width: '30%',
    backgroundColor: colors.lines,
  },
  textOu: {
    color: colors.lines,
    marginLeft: 8,
    marginRight: 8,
  },
  textBotton: {
    marginTop: 10,
    textAlign: 'center',
  },
});
