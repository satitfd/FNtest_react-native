import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Detail from './screens/Detail'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            //   options={{ title: 'Welcome' }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{ title: 'Welcome' }}
            />

            {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default App