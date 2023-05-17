import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {colors} from '../assets/colors';
import LogoutButton from '../components/LogoutButton';
import Item from '../components/Item';
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
  const dados = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: '4',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: '5',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: '6',
    },
  ];

  const routeUser = item => {
    console.log(item);
  };
  const renderItem = ({item}) => (
    <Item title={item.title} onPress={() => routeUser(item)} />
  );
  return (
    <SafeAreaView>
      <View style={style.pageHome}>
        <FlatList //cada item dentro da flatlist renderiza o componente que for passado na função render
          data={dados}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <LogoutButton style={style.button} />
      </View>
    </SafeAreaView>
  );
};
export default Home;

const style = StyleSheet.create({
  pageHome: {
    //backgroundColor: 'gray',
    //height: '100%',
  },
  button: {
    width: '50%',
  },
  nameApp: {
    color: colors.primaryDark,
    fontSize: 40,
    marginTop: 10,
  },
});
