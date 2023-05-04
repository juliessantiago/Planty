import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../assets/colors';
import LogoutButton from '../components/LogoutButton';
// import { Container } from './styles';

const Home = ({navigation}) => {
  console.log(navigation);
  // useEffect(navigation => {
  //   //personalização será feita durante a montagem do componente
  //   navigation.setOptions({
  //     headerLeft: false,
  //     title: 'Suas Plantas',
  //     // headerStyle: {backgroundColor: colors.primary},
  //     // headerTitleStyle: {color: 'white'},
  //     headerRight: () => <LogoutButton />,
  //   });
  // }, []);
  return (
    <View style={style.pageHome}>
      <Text style={style.nameApp}>Seja bem Vindo!</Text>
      <Image
        style={style.image}
        source={require('.././assets/images/lotus.png')}
        accessibilityLabel="logo do app"
      />
      <LogoutButton />
    </View>
  );
};
export default Home;

const style = StyleSheet.create({
  pageHome: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center', //alinhamento vertical
  },
  text: {
    color: colors.primaryDark,
    fontSize: 40,
  },
  button: {
    width: '50%',
  },
  image: {
    width: 150,
    height: 150,
  },
  nameApp: {
    color: colors.primaryDark,
    fontSize: 40,
    marginTop: 10,
  },
});
