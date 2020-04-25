import React, {useState, createContext, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

import * as auth from '../services/auth';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  // token: string; // token removido pois não tem necessidae de enviá-lo para renderização de componente
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// const AuthContext = createContext({signed: true});
// Este não é o valor default, é para servir como tipagem

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageDate() {
      // const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      // const storageToken = await AsyncStorage.getItem('@RNAuth:token');
      const storageData = await AsyncStorage.multiGet([
        '@RNAuth:user',
        '@RNAuth:token',
      ]);
      const storageUser = storageData[0][1];
      const storageToken = storageData[1][1];

      if (storageToken && storageUser) {
        console.log('Token armazenado');
        api.defaults.headers.authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }
    loadStorageDate();
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    // console.log('Response', response);
    setUser(response.user);

    api.defaults.headers.authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  function signOut() {
    //disparar uma ação para o frontend
    setUser(null);
    Promise.all([
      AsyncStorage.removeItem('@RNAuth:user'),
      AsyncStorage.removeItem('@RNAuth:token'),
    ]);
  }
  // !!user == Boolean(user)
  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
