import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { View, Text } from 'react-native';

import WithHeading from '../../components/generic/WithHeading';
import AuthForm from '../../components/shared/AuthForm';
import TextButton from '../../components/shared/TextButton';
import { Screens } from '../../constants/screens.constants';
import { ISubmitAuthFormParams } from '../../types/auth';
import { TRootStackParamList } from '../../types/navigation';

import { styles } from './styles';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handleSubmit = useCallback(async ({ values, reset }: ISubmitAuthFormParams) => {
    console.log({ values });

    reset();
  }, []);

  const handleNavigateToSignUp = (): void => {
    navigation.navigate(Screens.SIGN_UP);
  };

  const handleNavigateToResetPassword = (): void => {
    navigation.navigate(Screens.RESET_PASSWORD);
  };

  return (
    <WithHeading>
      <AuthForm onSubmit={handleSubmit} buttonLabel="login" isLoading={true} />

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>
          Don't have an account? – <TextButton onPress={handleNavigateToSignUp}>signup</TextButton>
        </Text>

        <Text style={styles.text}>
          Forgot your password? – <TextButton onPress={handleNavigateToResetPassword}>reset password</TextButton>
        </Text>
      </View>
    </WithHeading>
  );
};

export default LoginScreen;
