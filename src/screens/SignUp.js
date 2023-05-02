import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import {colors} from '../assets/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CreateButton from '../components/CreateButton';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

// import { Container } from './styles';
//APLICAR ESTILO!
const SignUp = ({navigation}) => {
  const [nome, setNome] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [pass, setPass] = useState(' ');
  const [confirmpass, setConfirmPass] = useState(' ');

  //console.log(firestore);

  const criaConta = () => {
    if (nome !== '' && email !== '' && pass !== ' ' && confirmpass !== ' ') {
      if (pass === confirmpass) {
        auth()
          .createUserWithEmailAndPassword(email, pass)
          .then(() => {
            let user = auth().currentUser;
            let userData = {};
            userData.nome = nome;
            userData.email = email;
            //const usersCollection = firestore().collection('Users');
            firestore()
              .collection('users')
              .doc(user.uid) //Chave
              .set(userData) //Valor
              .then(() => {
                console.log('Usuário adicionado');
                user.sendEmailVerification().then(() => {
                  Alert.alert(
                    'Olá!',
                    'Enviamos uma mensagem de verificação para seu e-mail',
                  ); 
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{name: 'Entrar'}], //após envio de e-mail de confirmação, redireciona para tela de login
                    }),
                  );
                }); //then do sendEmail
              });
          }) //then do cadastro
          .catch(error => {
            switch (error.code) {
              case 'auth/email-already-in-use':
                Alert.alert('Opa!', 'E-mail já está cadastrado');
                break;
              case 'auth/invalid-email':
                Alert.alert(
                  'Oops!',
                  'Insira um formato como "seunome@suaempresa.com',
                );
                break;
              case 'auth/operation-not-allowed':
                Alert.alert('Desculpe...', 'Não é permitido criar nova conta');
                break;
              case 'auth/weak-password':
                Alert.alert('Cuidado', 'Utilize uma senha forte');
                break;
            }
          }); //catch do cadastro
      } else {
        Alert.alert('Cuidado!', 'Senhas digitadas devem ser iguais');
      }
    } else {
      Alert.alert('Ainda não...', 'Você esqueceu de informar seus dados.');
    }
  };
  return (
    <SafeAreaView style={style.pageSignUp}>
      <ScrollView>
        <View>
          <View style={style.top}>
            <Image
              style={style.image}
              source={require('.././assets/images/nova_conta.png')}
              accessibilityLabel="logo do signIn"
            />
          </View>
          <TextInput
            style={style.input}
            placeholder="Nome Completo"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={text => setNome(text)}
            onEndEditing={() => this.emailTextInput.focus}
          />
          <TextInput
            ref={ref => (this.emailTextInput = ref)}
            style={style.input}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={text => setEmail(text)}
            onEndEditing={() => this.passTextInput.focus}
          />
          <TextInput
            ref={ref => (this.passTextInput = ref)}
            style={style.input}
            placeholder="Senha"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={text => setPass(text)}
            onEndEditing={() => this.confirmPassTextInput.focus}
          />
          <TextInput
            ref={ref => (this.confirmPassTextInput = ref)}
            style={style.input}
            placeholder="Confirme sua Senha"
            keyboardType="default"
            returnKeyType="send"
            onChangeText={text => setConfirmPass(text)}
            onEndEditing={() => criaConta}
          />
          <CreateButton entrar={criaConta} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const style = StyleSheet.create({
  pageSignUp: {
    paddingTop: 120,
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.primaryDark,
    fontSize: 40,
  },
  input: {
    //width: '60%',
    height: 50,
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 12,
    paddingBottom: 10,
  },
  subtitles: {
    color: colors.primaryDark,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
    margin: 8,
  },
});
