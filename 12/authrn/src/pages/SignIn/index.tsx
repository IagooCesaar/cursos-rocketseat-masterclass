import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import {signIn} from '../../services/auth';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SignIn: React.FC = () => {
  const {signed} = useContext(AuthContext);
  console.log('Signed?', signed);

  async function handleSigIn() {
    // Ex: email e password para autenticação
    const response = await signIn();
    console.log(response);
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSigIn} />
    </View>
  );
};

export default SignIn;
