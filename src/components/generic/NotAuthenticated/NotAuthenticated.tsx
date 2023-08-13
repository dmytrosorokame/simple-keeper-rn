import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';

import { Screens } from '../../../constants/screens.constants';
import { TRootStackParamList } from '../../../types/navigation';
import TextButton from '../../shared/TextButton';

import { styles } from './styles';

const NotAuthenticated: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handleNavigateToLogin = (): void => {
    navigation.navigate(Screens.LOGIN);
  };

  const handleNavigateToSignUp = (): void => {
    navigation.navigate(Screens.SIGN_UP);
  };

  return (
    <>
      <Text style={styles.title}>Not authenticated 🔒</Text>

      <Text style={styles.text}>
        Please, <TextButton onPress={handleNavigateToLogin}>login</TextButton> or{' '}
        <TextButton onPress={handleNavigateToSignUp}>signup</TextButton>
      </Text>
    </>
  );
};

export default NotAuthenticated;
