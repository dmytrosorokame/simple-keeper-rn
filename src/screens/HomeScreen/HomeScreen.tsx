import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import WithHeading from '../../components/generic/WithHeading';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { TRootStackParamList } from '../../types/navigation';

import { styles } from './styles';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList, 'Home'>>();

  const handleNavigateToExpenses = (): void => {
    navigation.navigate('Expenses');
  };

  const handleNavigateToCategories = (): void => {
    navigation.navigate('Categories');
  };

  const handleLogout = (): void => {};

  return (
    <WithHeading style={{ width: '100%', paddingHorizontal: 20 }}>
      <View style={styles.buttonContainer}>
        <Button onPress={handleNavigateToExpenses}>expenses</Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleNavigateToCategories}>categories</Button>
      </View>

      <Button onPress={handleLogout}>logout</Button>

      <Input />
    </WithHeading>
  );
};

export default HomeScreen;
