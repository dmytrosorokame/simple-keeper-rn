import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import AppNavigation from './src/components/generic/AppNavigation';
import AppProvider from './src/components/generic/AppProvider';

const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
