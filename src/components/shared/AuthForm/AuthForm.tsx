import { Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { authValidationSchema } from '../../../constants/validation/auth.schema';
import { ISubmitAuthFormParams } from '../../../types/auth';
import Input from '../Input';
import LoadingButton from '../LoadingButton';

import { styles } from './styles';

interface IAuthFormValues {
  email: string;
  password: string;
}

const initialValues: IAuthFormValues = {
  email: '',
  password: '',
};

interface IAuthFormProps {
  onSubmit: (data: ISubmitAuthFormParams) => Promise<void>;
  buttonLabel?: string;
  isLoading: boolean;
}

const AuthForm: React.FC<IAuthFormProps> = ({ onSubmit, buttonLabel = 'signup', isLoading }) => {
  const handleSubmit = useCallback(
    async (values: IAuthFormValues, { resetForm: reset }: FormikHelpers<IAuthFormValues>): Promise<void> =>
      onSubmit({ values, reset }),

    [onSubmit],
  );

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={authValidationSchema}>
      {({ values, handleChange, handleSubmit, setFieldValue, errors, touched }) => (
        <View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="email"
              value={values.email}
              onChangeText={handleChange('email')}
              isCrossVisible={!!values.email}
              onCrossClick={() => setFieldValue('email', '')}
              error={errors.email && touched.email ? errors.email : null}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              placeholder="password"
              value={values.password}
              onChangeText={handleChange('password')}
              isCrossVisible={!!values.password}
              onCrossClick={() => setFieldValue('password', '')}
              isPasswordInput
              error={errors.password && touched.password ? errors.password : null}
            />
          </View>

          <LoadingButton onPress={() => handleSubmit()} isLoading={isLoading}>
            {buttonLabel}
          </LoadingButton>
        </View>
      )}
    </Formik>
  );
};

export default AuthForm;
