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

const RootStack = createNativeStackNavigator<TRootStackParamList>();

const AppNavigation: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
      <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <RootStack.Screen name="Expenses" component={ExpensesScreen} />
      <RootStack.Screen name="ExpenseDetails" component={ExpenseDetailsScreen} />
      <RootStack.Screen name="ExpensesAnalytics" component={ExpensesAnalyticsScreen} />
      <RootStack.Screen name="AddExpense" component={AddExpenseScreen} />
      <RootStack.Screen name="Categories" component={CategoriesScreen} />
      <RootStack.Screen name="AddCategory" component={AddCategoryScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
