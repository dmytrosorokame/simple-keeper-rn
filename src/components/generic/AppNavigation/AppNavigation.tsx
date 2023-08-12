import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AddCategoryScreen from '../../../screens/AddCategoryScreen';
import AddExpenseScreen from '../../../screens/AddExpenseScreen';
import CategoriesScreen from '../../../screens/CategoriesScreen';
import ExpenseDetailsScreen from '../../../screens/ExpenseDetailsScreen';
import ExpensesAnalyticsScreen from '../../../screens/ExpensesAnalyticsScreen';
import ExpensesScreen from '../../../screens/ExpensesScreen';
import HomeScreen from '../../../screens/HomeScreen';
import LoginScreen from '../../../screens/LoginScreen';
import ResetPasswordScreen from '../../../screens/ResetPasswordScreen';
import SignUpScreen from '../../../screens/SignUpScreen';
import { TRootStackParamList } from '../../../types/navigation';

import { styles } from './styles';

const RootStack = createNativeStackNavigator<TRootStackParamList>();

const DEFAULT_SCREEN_OPTIONS = {
  headerShown: false,
  contentStyle: styles.content,
};

const AppNavigation: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="Login" component={LoginScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="Expenses" component={ExpensesScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="ExpenseDetails" component={ExpenseDetailsScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="ExpensesAnalytics" component={ExpensesAnalyticsScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="Categories" component={CategoriesScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="AddExpense" component={AddExpenseScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name="AddCategory" component={AddCategoryScreen} options={DEFAULT_SCREEN_OPTIONS} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
