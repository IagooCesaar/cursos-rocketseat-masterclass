import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import * as authService from '../../services/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SignIn: React.FC = () => {
  async function handleSigIn() {
    // Ex: email e password para autenticação
    const response = await authService.signIn();
    console.log(response);
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSigIn} />
    </View>
  );
};

export default SignIn;
