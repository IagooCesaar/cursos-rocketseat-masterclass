import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import useAuth from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();

  async function handleSigOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>Olá {user?.name}!</Text>
      <Button title="Sign Out" onPress={handleSigOut} />
    </View>
  );
};

export default Dashboard;
