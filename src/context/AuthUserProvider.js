import React, {createContext, useState} from 'react';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthUserContext.Provider>
    //todos que estiverem abaixo desse provider, receberão esses valores
  );
};
