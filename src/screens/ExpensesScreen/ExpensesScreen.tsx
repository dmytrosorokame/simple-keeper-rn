import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import WithHeading from '../../components/generic/WithHeading/WithHeading';
import Button from '../../components/shared/Button/Button';
import { TRootStackParamList } from '../../types/navigation';

import { styles } from './styles';

interface IExpensesScreen {}

const ExpensesScreen: React.FC<IExpensesScreen> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList, 'Expenses'>>();

  const handleNavigateToAddExpense = (): void => {
    navigation.navigate('AddExpense');
  };

  const handleBack = (): void => {
    navigation.goBack();
  };

  return (
    <WithHeading>
      <View style={styles.buttonContainer}>
        <Button onPress={handleNavigateToAddExpense}>add</Button>
      </View>

      <Button onPress={handleBack} isOutlined>
        back
      </Button>
    </WithHeading>
  );
};

export default ExpensesScreen;
