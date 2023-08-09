import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import AppNavigation from './src/components/generic/AppNavigation';

const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <AppNavigation />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
