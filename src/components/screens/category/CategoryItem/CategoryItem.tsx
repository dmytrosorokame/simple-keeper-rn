import React, { useCallback } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { ICategory } from '../../../../types/categories';
import Line from '../../../icons/Line';
import IconButton from '../../../shared/IconButton';

interface ICategoryItemProps {
  category: ICategory;
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ category }) => {
  // const dispatch = useAppDispatch();

  const handleDeleteCategory = useCallback((): void => {
    // dispatch(
    //   showPopup({
    //     popup: Popup.SUBMIT,
    //     data: {
    //       onConfirm: async () => {
    //         try {
    //           // await deleteCategory(category.id);
    //           Toast('Category deleted successfully!');
    //         } catch (error) {
    //           Toast('Something went wrong!');
    //         }
    //       },
    //     },
    //   }),
    // );
  }, [category]);

  return (
    <View>
      <Text>{category.name}</Text>

      {false ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <IconButton onPress={handleDeleteCategory}>
          <Line />
        </IconButton>
      )}
    </View>
  );
};

export default CategoryItem;
