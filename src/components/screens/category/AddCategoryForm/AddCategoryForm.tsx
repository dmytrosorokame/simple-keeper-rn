import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';

import { addCategoryValidationSchema } from '../../../../constants/validation/add-category.schema';
import { IAddCategoryFormValues } from '../../../../types/forms';
import Input from '../../../shared/Input';
import LoadingButton from '../../../shared/LoadingButton';

import { styles } from './styles';

const initialValues: IAddCategoryFormValues = {
  name: '',
};

interface IAddCategoryFormProps {
  isLoading: boolean;
  onSubmit: (values: IAddCategoryFormValues) => Promise<void>;
}

const AddCategoryForm: React.FC<IAddCategoryFormProps> = ({ onSubmit, isLoading }) => (
  <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={addCategoryValidationSchema}>
    {({ values, handleChange, setFieldValue, handleSubmit, errors, touched }) => (
      <View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="name"
            value={values.name}
            onChangeText={handleChange('name')}
            isCrossVisible={!!values.name}
            onCrossClick={() => setFieldValue('name', '')}
            error={errors.name && touched.name ? errors.name : null}
          />
        </View>

        <LoadingButton onPress={() => handleSubmit()} isLoading={isLoading}>
          add
        </LoadingButton>
      </View>
    )}
  </Formik>
);

export default AddCategoryForm;
