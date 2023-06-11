import React, {useState, useContext, useEffect} from 'react';
import {View, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';
import {colors} from '../../assets/colors';
import Item from './Item';
import {FlowerContext} from '../../context/FlowerProvider';
import {CommonActions} from '@react-navigation/native';

const Flowers = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {flowers} = useContext(FlowerContext);

  useEffect(() => {
    setData(flowers);
    setLoading(false); //quando monta o componente, para o loading
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flowers]); //quando receber algo de flowers, faz o setData

  //a função getFlowers que é definida em FlowerPovider não é chamada aqui
  //se fosse assim, toda vez que fôssemos montar o componente Flower, outro
  //acesso ao banco seria feito.
  //Para isso não acontecer, chamamos getFlowers no Preload
  const routeFlower = item => {
    //envia para rota de alteração de dados do usuário
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Flower',
        //params: {flower: item},
      }),
    );
  };

  const renderItem = ({item}) => (
    <Item item={item} onPress={() => routeFlower(item)} />
  );
  return (
    <SafeAreaView>
      <View style={style.pageHome}>
        <FlatList //cada item dentro da flatlist renderiza o componente que for passado na função render
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {loading && <LoadingIndicator />}
        {/* usando javascript para criar a lógica, passando um state (loading) */}
        {/* se state é verdadeiro, LoadingIndicator vai aparecer */}
      </View>
      <View style={style.bottom} />
    </SafeAreaView>
  );
};

export default Flowers;
const style = StyleSheet.create({
  pageHome: {
    display: 'flex',
    //height: '100%',
    //backgroundColor: 'gray',
    height: '80%',
  },
  bottom: {
    height: '20%',
  },
  button: {
    paddingTop: '10',
    marginLeft: 40,
    //width: '50%',
  },
  nameApp: {
    color: colors.primaryDark,
    fontSize: 40,
    marginTop: 10,
  },
});
