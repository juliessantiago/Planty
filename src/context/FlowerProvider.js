import React, {createContext, useState} from 'react';
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

  const getFlowers = async () => {
    const switchOffListener = firestore()
      .collection('flowers')
      .onSnapshot(
        //listener: dados vão ser retornados toda vez que houver uma alteração
        function (querySnapshot) {
          let arrayDados = [];
          querySnapshot.forEach(function (doc) {
            //console.log(doc.id, ' => ', doc.data());
            const flower = {
              id: doc.id,
              nome: doc.data().nome,
              inicio_plantio: doc.data().inicio_plantio,
              cor: doc.data().cor,
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
    //console.log(value);
    await firestore()
      .collection('flowers')
      .doc(value.uid)
      .set(
        {
          nome: value.nome,
          cor: value.cor,
          inicio_plantio: value.inicio_plantio,
        },
        {merge: true},
      )
      .then(() => {
        showToastWithGravity('Flor atualizada com sucesso!');
      })
      .catch(error => {
        console.log(
          'Não foi possível atualizar dados (FlowerProvider)' + error,
        );
      });
  };
  return (
    <FlowerContext.Provider
      value={{
        flowers,
        getFlowers,
        saveFlower,
      }}>
      {children}
    </FlowerContext.Provider>
  );
};
