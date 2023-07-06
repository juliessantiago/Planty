import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {FlowerContext} from '../context/FlowerProvider';

const MapFlowers = () => {
  const [mapType, setMatType] = useState('standard');
  const [markers, setMarkers] = useState([]);
  const {students} = useContext(FlowerContext);

  useEffect(() => {
    //console.log(students);
    let m = [];
    students.map(s => {
      //console.log(s);
      m.push({
        key: s.uid,
        coords: {
          latitude: Number(s.latitude),
          longitude: Number(s.longitude),
        },
        title: s.curso,
        description: s.nome,
        image: require('../../assets/images/map.png'),
      });
    });
    setMarkers(m);
  }, [students]);

  return (
    <View style={style.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        ref={map => (this.map = map)}
        style={style.map}
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
          //região onde deve focar o mapa na inicialização
          latitude: -31.766108372781073,
          longitude: -52.35215652734042,
          latitudeDelta: 0.015, //baseado na documentação
          longitudeDelta: 0.0121, //baseado na documentação
        }}>
        {markers.map(marker => {
          return (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              title={marker.title}
              description={marker.description}
              draggable
              image={marker.image}
            />
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
