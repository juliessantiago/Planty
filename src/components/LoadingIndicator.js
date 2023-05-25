import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const LoadingIndicator = () => {
  return (
    <View style={style.areaLoading}>
      <ActivityIndicator size="large" color={colors.accent} />
    </View>
  );
};

export default LoadingIndicator;

const style = StyleSheet.create({
  areaLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    //display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
