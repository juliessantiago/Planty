import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {colors} from '../assets/colors';
import LogoutButton from '../components/LogoutButton';
import Item from '../components/Item';
import firestore from '@react-native-firebase/firestore';
const Home = ({navigation}) => {
  const [data, setData] = useState([]);

  const getUsers = () => {
    firestore()
      .collection('users')
      .get()
      .then(function (querySnapshot) {
        let arrayDados = [];
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, ' => ', doc.data());
          const user = {
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
          };
          arrayDados.push(user);
          //console.log(arrayzinho);
        });
        setData(arrayDados);
      });
    // .catch((error) => {
    //   console.log('testando')
    // })
  };

  useEffect(() => {
    getUsers();
  }, []);

  const routeUser = item => {
    console.log(item);
  };

  const renderItem = ({item}) => (
    <Item item={item} onPress={() => routeUser(item)} />
  );
  return (
    <SafeAreaView>
      <View style={style.pageHome}>
        <FlatList //cada item dentro da flatlist renderiza o componente que for passado na função render
          data={data}
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
