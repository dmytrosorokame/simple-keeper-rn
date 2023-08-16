import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';

import WithHeading from '../../components/generic/WithHeading';
import AuthForm from '../../components/shared/AuthForm';
import TextButton from '../../components/shared/TextButton';
import { Screens } from '../../constants/screens.constants';
import { ISubmitAuthFormParams } from '../../types/auth';
import { TRootStackParamList } from '../../types/navigation';

import { styles } from './styles';

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handleSubmit = useCallback(async ({ values, reset }: ISubmitAuthFormParams) => {
    console.log({ values });

    reset();
  }, []);

  const handleNavigateToLogin = (): void => {
    navigation.navigate(Screens.LOGIN);
  };

  return (
    <WithHeading>
      <AuthForm onSubmit={handleSubmit} buttonLabel="signup" isLoading={true} />

      <View style={styles.bottomContainer}>
        <Text>
          Have an account? – <TextButton onPress={handleNavigateToLogin}>login</TextButton>
        </Text>
      </View>
    </WithHeading>
  );
};

export default SignUpScreen;
