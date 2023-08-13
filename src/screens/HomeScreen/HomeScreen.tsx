import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import WithHeading from '../../components/generic/WithHeading';
import Button from '../../components/shared/Button';
import { Screens } from '../../constants/screens.constants';
import { TRootStackParamList } from '../../types/navigation';

import { styles } from './styles';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList, 'Home'>>();

  const handleNavigateToExpenses = (): void => {
    navigation.navigate(Screens.EXPENSES);
  };

  const handleNavigateToCategories = (): void => {
    navigation.navigate(Screens.CATEGORIES);
  };

  const handleLogout = (): void => {};

  return (
    <WithHeading>
      <View style={styles.buttonContainer}>
        <Button onPress={handleNavigateToExpenses}>expenses</Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleNavigateToCategories}>categories</Button>
      </View>

      <Button onPress={handleLogout}>logout</Button>
    </WithHeading>
  );
};

export default HomeScreen;
