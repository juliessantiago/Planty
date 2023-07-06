import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Alert, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {FlowerContext} from '../context/FlowerProvider';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../assets/colors';

const MapFlowers = () => {
  const [mapType, setMatType] = useState('standard');
  const [markers, setMarkers] = useState([]);
  const {flowers} = useContext(FlowerContext);

  useEffect(() => {
    //console.log(students);
    let m = [];
    flowers.map(s => {
      console.log(s);
      m.push({
        key: s.id,
        coords: {
          latitude: Number(s.latitude),
          longitude: Number(s.longitude),
        },
        title: s.curso,
        description: s.nome,
        image: require('../assets/images/map.png'),
      });
    });
    setMarkers(m);
  }, [flowers]);

  return (
    <View style={style.container}>
      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        provider={PROVIDER_GOOGLE}
        ref={map => (this.map = map)}
        mapType={mapType}
        showsUserLocation={true}
        followsUserLocation={true}
        onPress={e => {
          Alert.alert(
            'Coordenadas',
            'latitude= ' +
              e.nativeEvent.coordinate.latitude +
              ' longitude= ' +
              e.nativeEvent.coordinate.longitude,
          );
        }}
        initialRegion={{
          //inicialização do mapa
          latitude: -31.766108372781073,
          longitude: -52.35215652734042,
          latitudeDelta: 0.015, //baseado na documentação
          longitudeDelta: 0.0121, //baseado na documentação
        }}>
        {flowers.map(flower => {
          return (
            <Marker
              key={flower.id}
              coordinate={{
                latitude: Number(flower.latitude),
                longitude: Number(flower.longitude),
              }}
              title={flower.nome}
              description={flower.cor}
              draggable>
              <Icon
                name="business"
                color={
                  mapType === 'standard' ? colors.primary : colors.primaryDark
                }
                size={35}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};
export default MapFlowers;
const style = StyleSheet.create({
  container: {
    display: 'flex',
  },
  map: {
    color: 'black',
  },
});
