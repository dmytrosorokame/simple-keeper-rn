interface IExpenseDetailsScreenParamList {
  expenseId: string;
}

export type TRootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  Expenses: undefined;
  AddExpense: undefined;
  ExpenseDetails: IExpenseDetailsScreenParamList;
  ExpensesAnalytics: undefined;
  Categories: undefined;
  AddCategory: undefined;
};
