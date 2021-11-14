import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavStack from './NavStack';

const Routes = () => {
  return (
    <NavigationContainer>
      <NavStack/>
    </NavigationContainer>
  );
};

export default Routes;
