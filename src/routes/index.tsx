import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import BarCodeReader from '../screens/BarCodeReader';
import Result from '../screens/Result';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      BarCodeReader: undefined;
      Result: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BarCodeReader" component={BarCodeReader} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

export default Routes;
