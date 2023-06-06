import React, {createContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export const FlowerContext = createContext({});

export const FlowerProvider = ({children}) => {
  const [flowers, setFlowers] = useState([]);

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
              plantio: doc.data().inicio_plantio,
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
  return (
    <FlowerContext.Provider
      value={{
        flowers,
        getFlowers,
      }}>
      {children}
    </FlowerContext.Provider>
  );
};
