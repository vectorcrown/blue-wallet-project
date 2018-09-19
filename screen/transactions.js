import { createStackNavigator } from 'react-navigation';

import list from './transactions/list';

const TransactionsNavigator = createStackNavigator(
  {
    TransactionsList: {
      screen: list,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default TransactionsNavigator;
