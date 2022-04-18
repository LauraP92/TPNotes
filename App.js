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
      // screenOptions={{
      //   headerStyle: {backgroundColor: BLUE},
      //   headerTintColor: WHITE,
      // }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NoteDetails" component={NoteDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
