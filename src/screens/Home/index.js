import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlowersTab from '../Flowers/FlowersTab';
import SeedsTab from '../Seeds/SeedsTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../assets/colors';
import {CommonActions} from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// const MyTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarLabel: 'titulo',
//         tabBarLabelPosition: 'beside-icon',
//         tabBarLabelStyle: {
//           color: colors.primaryDark,
//           fontSize: 14,
//         },
//       }}>
//       <Tab.Screen
//         name="FlowersTab"
//         component={FlowersTab}
//         options={{
//           tabBarLabel: 'Flores',
//         }}
//       />
//       <Tab.Screen
//         name="SeedsTab"
//         component={SeedsTab}
//         options={{
//           tabBarLabel: 'Sementes',
//           tabBarIcon: () => {
//             <Icon name="car" size={24} color={colors.primaryDark} />;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export {MyTabNavigator};
const Home = ({navigation}) => {
  const routeUsers = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Users',
        //params: {user: item},
      }),
    );
  };

  const routeFlowers = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Flowers',
        //params: {user: item},
      }),
    );
  }
  return (
    <View style={style.container}>
      <TouchableHighlight
        style={style.button}
        underlayColor={colors.primaryDark}
        onPress={routeUsers}>
        <>
          <Icon name="rocket" color="#f1f1f1" size={40} />
          <Text style={style.opcao}>Usuários</Text>
        </>
      </TouchableHighlight>

      <TouchableHighlight
        style={style.button}
        underlayColor={colors.primaryDark}
        onPress={routeFlowers}>
        <>
          <Icon name="rocket" color="#f1f1f1" size={40} />
          <Text style={style.opcao}>Flores</Text>
        </>
      </TouchableHighlight>

      <TouchableHighlight
        style={style.button}
        underlayColor={colors.primaryDark}>
        <>
          <Icon name="rocket" color="#f1f1f1" size={40} />
          <Text style={style.opcao}>Sementes</Text>
        </>
      </TouchableHighlight>
    </View>
  );
};

export default Home;
const style = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'space-around', //alinhamento vertical
    flexWrap: 'nowrap',
  },
  button: {
    //button é o item em si
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
    width: 100,
    height: 100,
    //borderColor: 'green',
    textShadowColor: 'black',
    paddingLeft: 10,
    textAlign: 'center',
    margin: 10,
  },
  opcao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
