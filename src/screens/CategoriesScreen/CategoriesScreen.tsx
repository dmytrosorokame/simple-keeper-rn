import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import WithHeading from '../../components/generic/WithHeading/WithHeading';
import Button from '../../components/shared/Button/Button';
import { TRootStackParamList } from '../../types/navigation';

import { styles } from './styles';

interface ICategoriesScreen {}

const CategoriesScreen: React.FC<ICategoriesScreen> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList, 'Categories'>>();

  const handleNavigateToAddCategory = (): void => {
    navigation.navigate('AddCategory');
  };

  const handleBack = (): void => {
    navigation.goBack();
  };

  return (
    <WithHeading>
      <View style={styles.buttonContainer}>
        <Button onPress={handleNavigateToAddCategory}>add</Button>
      </View>

      <Button onPress={handleBack} isOutlined>
        back
      </Button>
    </WithHeading>
  );
};

export default CategoriesScreen;
