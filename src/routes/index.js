import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//páginas de autenticação
import AuthScreen from './Auth.routes';

//páginas do app
import HomeScreen from './Main.routes';

const signed = false;

export default function routes() {
  return (
    <NavigationContainer>
      {signed ? <HomeScreen /> : <AuthScreen />}
    </NavigationContainer>
  );
}
