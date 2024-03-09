
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/homeScreen';
import SplashScreen from './src/screens/splashScreen';
import Navigation from './src/navigation/tabNavigation';
import AnimTab1 from './src/navigation/animation';
const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AnimTab1" component={AnimTab1} options={{ headerShown: false }} />
        <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App;
