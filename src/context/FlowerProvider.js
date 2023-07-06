import React, {createContext, useEffect, useState} from 'react';
import ToastAndroid from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const FlowerContext = createContext({});

export const FlowerProvider = ({children}) => {
  const [flowers, setFlowers] = useState([]);

  const showToastWithGravity = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      30,
      30,
    );
  };

  useEffect(() => {
    getFlowers();
  }, []);
  const getFlowers = async () => {
    const switchOffListener = firestore()
      .collection('flowers')
      .onSnapshot(
        //listener: dados vão ser retornados toda vez que houver uma alteração
        function (querySnapshot) {
          //console.log('getFlowers');
          console.log(querySnapshot);
          let arrayDados = [];
          querySnapshot.forEach(function (doc) {
            //console.log(doc.id, ' => ', doc.data());
            const flower = {
              id: doc.id,
              nome: doc.data().nome,
              inicio_plantio: doc.data().inicio_plantio,
              cor: doc.data().cor,
              latitude: doc.data().latitude,
              longitude: doc.data().longitude,
            };
            arrayDados.push(flower);
            //console.log(arrayzinho);
          });
          setFlowers(arrayDados);
          //setLoading(false);
          //loading vai ficar no componente Flowers
        },
        error => {
          console.log(
            error + 'HOME - Não foi possível recuperar dados de flowers',
          );
        },
      );
    return switchOffListener;
  };

  // eslint-disable-next-line prettier/prettier
  const saveFlower = async(value) => {
    console.log(value);
    await firestore()
      .collection('flowers')
      .doc(value.uid)
      .set(
        {
          nome: value.nome,
          cor: value.cor,
          inicio_plantio: value.inicio_plantio,
          latitude: value.latitude,
          longitude: value.longitude,
        },
        {merge: true},
      )
      .then(() => {
        showToastWithGravity('Flor atualizada com sucesso!');
      })
      .catch(error => {
        console.log(
          //está caindo aqui sempre mesmo excluindo os dados
          'Não foi possível atualizar dados (FlowerProvider)' + error,
        );
      });
  };

  // eslint-disable-next-line prettier/prettier
  const deleteFlower = async (uid) => {
    firestore()
      .collection('flowers')
      .doc(uid)
      .delete()
      .then(() => {
        showToastWithGravity('Flor excluida com sucesso!');
      })
      .catch(error => {
        //está caindo aqui sempre mesmo excluindo os dados
        console.log('Não foi possível excluir a flor' + error);
      });
  };
  return (
    <FlowerContext.Provider
      value={{
        flowers,
        getFlowers,
        saveFlower,
        deleteFlower,
      }}>
      {children}
    </FlowerContext.Provider>
  );
};
