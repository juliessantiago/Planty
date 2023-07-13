import React, {createContext, useState} from 'react';
import {create} from 'apisauce';
import auth from '@react-native-firebase/auth';

export const ApiContext = createContext();
export const ApiProvider = ({children}) => {
  const [api, setApi] = useState(null);
  const getApi = () => {
    if (auth().currentUser) {
      console.log(auth().currentUser);
      //testando se há um usuário autenticado
      // eslint-disable-next-line prettier/prettier
      auth().currentUser.getIdToken(true) //pra que serve o parâmetro?
        .then(idToken => {
          const apiLocal = create({
            baseURL:
              'https://firestore.googleapis.com/v1/projects/tentativa5-af729/databases/(default)/documents/',
            headers: {
              Authorization: 'Bearer' + idToken,
            },
          });
          // console.log('API '+apiLocal);
        })
        .catch(error => {
          console.log('erro no API Provider' + error);
        });
    }
  };
  return (
    <ApiContext.Provider value={{api, getApi}}>{children}</ApiContext.Provider>
  );
};
//preciso da API quando for usar as screens, então sua chamada 
//vai ser colocada no preload 

