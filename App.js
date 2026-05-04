import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecipeProvider } from './src/context/RecipeContext';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <RecipeProvider>
        <RootNavigator />
        <StatusBar barStyle="dark-content" />
      </RecipeProvider>
    </SafeAreaProvider>
  );
}
