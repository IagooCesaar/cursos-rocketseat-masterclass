import 'react-native-gesture-handler';

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import AuthContext from './contexts/auth';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{signed: true}}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
