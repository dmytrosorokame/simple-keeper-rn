import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import WithHeading from '../../components/generic/WithHeading';
import AddCategoryForm from '../../components/screens/category/AddCategoryForm';
import Button from '../../components/shared/Button';
import { IAddCategoryFormValues } from '../../types/forms';
import { TRootStackParamList } from '../../types/navigation';

import { styles } from './styles';

interface IAddCategoryScreen {}

const AddCategoryScreen: React.FC<IAddCategoryScreen> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList, 'AddCategory'>>();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSubmit = useCallback(async ({ name }: IAddCategoryFormValues): Promise<void> => {
    console.log({ name });
  }, []);

  return (
    <WithHeading>
      <View style={styles.formContainer}>
        <AddCategoryForm onSubmit={handleSubmit} isLoading={false} />
      </View>

      <Button onPress={handleBack} isOutlined>
        back
      </Button>
    </WithHeading>
  );
};

export default AddCategoryScreen;
