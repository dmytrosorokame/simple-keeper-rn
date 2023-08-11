import React from 'react';
import { Text, View } from 'react-native';

import Button from '../../components/shared/Button';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = () => {
  return (
    <View style={{ width: '100%', paddingHorizontal: 20 }}>
      <Text>Home screen</Text>
      <Button>Click me</Button>
    </View>
  );
};

export default HomeScreen;
