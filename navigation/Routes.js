import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavStack from './NavStack';
import AppStack from './AppStack';
import { AuthContext } from './Auth';
import auth from '@react-native-firebase/auth';

const Routes = () => {

  const { user, setUser } = useContext(AuthContext);
  const [ initializing, setInitializing ] = useState(true);

  const onAuthStateChange = (user) => {
    setUser(user);
    if (initializing)
    {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChange(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing)
  {
    return null;
  }

  return (
    <NavigationContainer>
      { user ? <AppStack/> : <NavStack/> }
    </NavigationContainer>
  );
};

export default Routes;
