import React from 'react';
import { Text, View } from 'react-native';

import { ICategory } from '../../../../types/categories';
import CategoryItem from '../CategoryItem';

interface ICategoriesListProps {
  categories: ICategory[];
}

const CategoryList: React.FC<ICategoriesListProps> = ({ categories }) => (
  <>
    {categories.length ? (
      <>
        {categories.map((category) => (
          <View key={category.id}>
            <CategoryItem category={category} />
          </View>
        ))}
      </>
    ) : (
      <Text>No categories!</Text>
    )}
  </>
);

export default CategoryList;
