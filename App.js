import React from 'react';
import type {Node} from 'react';
import HomeScreen from './src/screens/Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NoteDetails from './src/screens/NoteDetails/NoteDetails';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackVisible: true,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="route-name"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="NoteDetails" component={NoteDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
