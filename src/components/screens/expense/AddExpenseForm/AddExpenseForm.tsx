import { Formik } from 'formik';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { DEFAULT_CATEGORY_OPTION } from '../../../../constants/category.constants';
import { addExpenseValidationSchema } from '../../../../constants/validation/add-expense.schema';
import { IAddExpenseFormValues } from '../../../../types/forms';
import { prepareCategoriesOptions } from '../../../../utils/prepareCategoriesOptions';
import Input from '../../../shared/Input';
import LoadingButton from '../../../shared/LoadingButton';
import Select from '../../../shared/Select';

import { styles } from './styles';

const initialValues: IAddExpenseFormValues = {
  amount: 0,
  categoryOption: DEFAULT_CATEGORY_OPTION,
  name: '',
  comment: '',
};

interface IAddExpenseFormProps {
  isLoading: boolean;
  onSubmit: (values: IAddExpenseFormValues) => Promise<void>;
}

const AddExpenseForm: React.FC<IAddExpenseFormProps> = ({ isLoading, onSubmit }) => {
  const categories: any[] = [];

  const categoriesOptions = useMemo(() => prepareCategoriesOptions(categories), [categories]);

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={addExpenseValidationSchema}>
      {({ values, handleChange, setFieldValue, handleSubmit, errors, touched }) => (
        <View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="amount"
              value={String(values.amount)}
              onChangeText={handleChange('amount')}
              isCrossVisible={!!values.amount}
              onCrossClick={() => setFieldValue('amount', 0)}
              error={errors.amount && touched.amount ? errors.amount : null}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Select
              options={categoriesOptions}
              selectedOption={values.categoryOption}
              onChange={(newCategoryOption) => {
                setFieldValue('categoryOption', newCategoryOption);
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              placeholder="name?"
              value={values.name}
              onChangeText={handleChange('name')}
              isCrossVisible={!!values.name}
              onCrossClick={() => setFieldValue('name', '')}
            />
          </View>

          <View style={styles.inputContainer}>
            <Input
              placeholder="comment?"
              value={values.comment}
              onChangeText={handleChange('comment')}
              isCrossVisible={!!values.comment}
              onCrossClick={() => setFieldValue('comment', '')}
            />
          </View>

          <LoadingButton onPress={() => handleSubmit()} isLoading={isLoading}>
            add
          </LoadingButton>
        </View>
      )}
    </Formik>
  );
};

export default AddExpenseForm;
