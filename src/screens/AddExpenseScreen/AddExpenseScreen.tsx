import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import WithHeading from '../../components/generic/WithHeading';
import AddExpenseForm from '../../components/screens/expense/AddExpenseForm';
import Button from '../../components/shared/Button';
import { TRootStackParamList } from '../../types/navigation';

import { styles } from './styles';

interface IAddExpenseScreen {}

const AddExpenseScreen: React.FC<IAddExpenseScreen> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList, 'AddExpense'>>();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSubmit = useCallback(async () => {}, []);

  return (
    <WithHeading>
      <View style={styles.formContainer}>
        <AddExpenseForm isLoading={false} onSubmit={handleSubmit} />
      </View>

      <Button onPress={handleBack} isOutlined>
        back
      </Button>
    </WithHeading>
  );
};

export default AddExpenseScreen;
