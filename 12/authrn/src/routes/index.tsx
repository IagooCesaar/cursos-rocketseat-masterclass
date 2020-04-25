//Controlará qual stack de rotas estará disponível para o usuário
import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import useAuth from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    console.log('Loading');
    // ver sobre react-native-splash-screen
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
