import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';

// import { Container } from './styles';
const dadinhos = [
    {nome: 'rosa',}
]
const Flowers = () => {
    return (
        <SafeAreaView>
          <View style={style.pageHome}>
            <FlatList //cada item dentro da flatlist renderiza o componente que for passado na função render
              data={dadinhos}
              //renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            {/* {loading && <LoadingIndicator />} */}
            {/* usando javascript para criar a lógica, passando um state (loading) */}
            {/* se state é verdadeiro, LoadingIndicator vai aparecer */}
          </View>
          <View style={style.bottom}>
            <LogoutButton style={style.button} />
          </View>
        </SafeAreaView>
      );
}

export Flowers ;