import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Autenticacao from '../pages/Autenticacao';

//importado só para visualizar navigation funcionando -- DEVE SER APAGADO
import TelaInicial from '../pages/TelaInicial';
// APAGAR ^^^^^^

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AuthScreen() {
  return (
    <Stack.Navigator initialRouteName="Autenticacao">
      <Stack.Screen name="Autenticacao" component={Autenticacao} />
    </Stack.Navigator>
  );
}
