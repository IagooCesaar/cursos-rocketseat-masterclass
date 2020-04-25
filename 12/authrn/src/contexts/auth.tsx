import React, {useState, createContext} from 'react';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  // token: string; // token removido pois não tem necessidae de enviá-lo para renderização de componente
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// const AuthContext = createContext({signed: true});
// Este não é o valor default, é para servir como tipagem

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn();
    // console.log('Response', response);
    setUser(response.user);
  }

  function signOut() {
    //disparar uma ação para o frontend
    setUser(null);
  }
  // !!user == Boolean(user)
  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
