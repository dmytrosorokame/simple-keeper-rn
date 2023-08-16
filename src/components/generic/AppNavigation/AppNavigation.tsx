import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Screens } from '../../../constants/screens.constants';
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
      <RootStack.Screen name={Screens.HOME} component={HomeScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name={Screens.SIGN_UP} component={SignUpScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name={Screens.LOGIN} component={LoginScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen
        name={Screens.RESET_PASSWORD}
        component={ResetPasswordScreen}
        options={DEFAULT_SCREEN_OPTIONS}
      />
      <RootStack.Screen name={Screens.EXPENSES} component={ExpensesScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen
        name={Screens.EXPENSE_DETAILS}
        component={ExpenseDetailsScreen}
        options={DEFAULT_SCREEN_OPTIONS}
      />
      <RootStack.Screen
        name={Screens.EXPENSES_ANALYTICS}
        component={ExpensesAnalyticsScreen}
        options={DEFAULT_SCREEN_OPTIONS}
      />
      <RootStack.Screen name={Screens.CATEGORIES} component={CategoriesScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name={Screens.ADD_EXPENSE} component={AddExpenseScreen} options={DEFAULT_SCREEN_OPTIONS} />
      <RootStack.Screen name={Screens.ADD_CATEGORY} component={AddCategoryScreen} options={DEFAULT_SCREEN_OPTIONS} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
