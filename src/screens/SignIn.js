import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native'; //core componentes
import {colors} from '../assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import LittleButton from '../components/LittleButton';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState(' ');
  const [pass, setPass] = useState(' ');

  const entrar = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        if (!auth().currentUser.emailVerified) {
          //Se e-mail não foi verificado, não continua o processo
          Alert.alert('Desculpe...', 'Você deve verificar seu e-mail primeiro');
          return;
        }
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/user-not-found':
            Alert.alert('Opa!', 'Não encontramos seu e-mail');
            break;
          case 'auth/wrong-password':
            Alert.alert('Houston, we have a problem!', 'Senha incorreta');
            break;
          case 'auth/invalid-email':
            Alert.alert(
              'Oops!',
              'Insira um formato como "seunome@suaempresa.com',
            );
            break;
          case 'auth/user-disabled':
            Alert.alert('Pedimos desculpas', 'Seu usuário está inativado');
            break;
        }
      });
  };

  const cadastre = () => {
    //console.log(navigation)
    navigation.navigate('SignUp');
  };

  const esqueceu = () => {
    //console.log("esqueceu a senha");
    navigation.navigate('Forgot');
  };
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.top}>
          <Image
            style={style.image}
            source={require('.././assets/images/signIn.png')}
            accessibilityLabel="logo do signIn"
          />
          <TextInput
            ref={ref => (this.emailTextInput = ref)}
            style={style.input}
            placeholder="email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={text => setEmail(text)}
            onEndEditing={() => this.passTextInput.focus}
          />
          <TextInput
            ref={ref => (this.passTextInput = ref)}
            style={style.input}
            placeholder="senha"
            keyboardType="default"
            returnKeyType="go"
            onChangeText={text => setPass(text)}
          />

          <View style={style.divInput}>
            <Text style={style.links} onPress={esqueceu}>
              Esqueceu sua senha?
            </Text>
          </View>
          <LittleButton entrar={entrar} />
        </View>

        <View style={style.bottom}>
          <View style={style.divOu}>
            <View style={style.line} />
            <Text style={style.textOu}>Ou</Text>
            <View style={style.line} />
          </View>

          <View style={style.divOu}>
            <Text style={style.textBotton}>Não possui uma conta? </Text>
            <Text style={style.links} onPress={cadastre}>
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
    flex: 4,
    alignItems: 'center',
  },
  bottom: {
    flex: 8,
  },
  image: {
    width: 120,
    height: 120,
    margin: 8,
  },
  divInput: {
    marginTop: 20,
    //div input: botão entrar e opção "esqueceu sua senha"
    width: '70%',
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
  links: {
    //paddingTop: 30,
    color: colors.primaryDark,
    fontSize: 16,
    marginBottom: 2,
    paddingRight: 20,
    textAlign: 'right',
    fontStyle: 'italic',
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
    padding: 0,
    color: colors.lines,
    marginLeft: 8,
    marginRight: 8,
  },
  textBotton: {
    padding: 0,
    marginTop: 0,
    fontSize: 16,
  },
});
