import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SignIn: React.FC = () => {
  const {signed, signIn} = useContext(AuthContext);
  console.log('Signed?', signed);

  async function handleSigIn() {
    // Ex: email e password para autenticação
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSigIn} />
    </View>
  );
};

export default SignIn;
