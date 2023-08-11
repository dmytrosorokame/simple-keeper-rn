import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';

const ScreenLoader: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#000" />
  </View>
);

export default ScreenLoader;
