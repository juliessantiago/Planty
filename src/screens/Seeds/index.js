import React, {useState, useContext, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {colors} from '../../assets/colors';
// import {ApiContext} from '../../context/ApiProvider';

const Seeds = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
//   const {getApi} = useContext(ApiContext);

  return (
    <SafeAreaView>
      <View style={style.pageHome}>
        <Text>Sementes</Text>
      </View>
      {/* <View style={style.bottom} /> */}
    </SafeAreaView>
  );
};

export default Seeds;
const style = StyleSheet.create({
  pageHome: {
    display: 'flex',
    //height: '100%',
    //backgroundColor: 'gray',
    height: '95%',
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
  image: {
    marginTop: 10,
    marginLeft: '60%',
  },
});
