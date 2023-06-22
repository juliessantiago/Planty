import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
  TouchableHighlight,
} from 'react-native'; //core componentes
import {colors} from '../assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import LittleButton from '../components/LittleButton';
import auth from '@react-native-firebase/auth';
// import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState(' ');
  const [pass, setPass] = useState(' ');
  const entrar = () => {
    console.log(email);
    console.log(pass);
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        if (!auth().currentUser.emailVerified) {
          console.log('não verificado');
          //Se e-mail não foi verificado, não continua o processo
          Alert.alert('Desculpe...', 'Você deve verificar seu e-mail primeiro');
          return;
        }
        console.log('verificado');
        storeUserCache({email, pass});
        getUser();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: ' AppStack'}],
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

  const storeUserCache = async value => {
    //console.log(value);
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{name: 'Users'}],
      //   }),
      // );
    } catch (error) {
      console.log('Não salvou usuário em cache' + error);
    }
  };

  const getUser = async () => {
    //recuperando dados do usuário logado
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(doc => {
        //console.log(doc);
        if (doc.exists) {
          //console.log('Dados' + doc.data());
        } else {
          console.log('Documento não existe no banco de dados');
        }
      })
      .catch(error => {
        console.log('Erro ao receber dados' + error);
      });
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
            underlayColor={'transparent'}
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
          <TouchableHighlight underlayColor={colors.primary}>
            <LittleButton entrar={entrar} text="Entrar" />
          </TouchableHighlight>
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
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  divInput: {
    marginTop: 20,
    //div input: botão entrar e opção "esqueceu sua senha"
    width: '70%',
  },
  input: {
    width: '80%',
    height: 50,
    borderBottomColor: colors.accent,
    borderBottomWidth: 1.2,
    fontSize: 18,
    padding: 12,
    paddingBottom: 10,
  },
  links: {
    //paddingTop: 30,
    color: colors.primaryDark,
    fontSize: 12,
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
    fontSize: 12,
  },
});
