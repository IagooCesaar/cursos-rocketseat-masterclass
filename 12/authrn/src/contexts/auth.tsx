import React, {useState, createContext} from 'react';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  // token: string; // token removido pois não tem necessidae de enviá-lo para renderização de componente
  user: object;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// const AuthContext = createContext({signed: true});
// Este não é o valor default, é para servir como tipagem

export const AuthProvider: React.FC = ({children}) => {
  async function signIn() {
    const response = await auth.signIn();
    console.log('Response', response);
  }
  return (
    <AuthContext.Provider value={{signed: false, user: {}, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
