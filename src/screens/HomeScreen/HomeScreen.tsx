import React from 'react';
import { Text, View } from 'react-native';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = () => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
