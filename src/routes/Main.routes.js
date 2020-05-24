import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from '../pages/TelaInicial';

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="TelaInicial">
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
    </Stack.Navigator>
  );
}
