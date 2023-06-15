import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FlowersTab from '../Flowers/FlowersTab';
import SeedsTab from '../Seeds/SeedsTab';
import Home from '../Home/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../assets/colors';

const Tab = createBottomTabNavigator();

const MyTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          color: colors.primaryDark,
          fontSize: 14,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="FlowersTab"
        component={FlowersTab}
        options={{
          tabBarLabel: 'Flores',
        }}
      />
      <Tab.Screen
        name="SeedsTab"
        component={SeedsTab}
        options={{
          tabBarLabel: 'Sementes',
          tabBarIcon: () => {
            <Icon name="car" size={24} color={colors.primaryDark} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabNavigator;
