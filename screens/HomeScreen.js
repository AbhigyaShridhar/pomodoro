import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/Auth';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>Welcome {user.uid}</Text>
      <FormButton buttonTitle='Logout' onPress={() => logout()}/>
    </View>
  );
}

export default HomeScreen;
