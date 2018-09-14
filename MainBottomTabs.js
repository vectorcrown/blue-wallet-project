import { createBottomTabNavigator } from 'react-navigation';

import transactions from './screen/transactions';
import wallets from './screen/wallets';
import send from './screen/send';
import settings from './screen/settings';
import receive from './screen/receive';

/** @type {AppStorage} */
let BlueApp = require('./BlueApp');

const Tabs = createBottomTabNavigator(
  {
    Wallets: {
      screen: wallets,
      path: 'wallets',
    },
    Transactions: {
      screen: transactions,
      path: 'trans',
    },
    Send: {
      screen: send,
      path: 'cart',
    },
    Receive: {
      screen: receive,
      path: 'receive',
    },
    Settings: {
      screen: settings,
      path: 'settings',
    },

    //
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarVisible: false,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: BlueApp.settings.foregroundColor,
      activeBackgroundColor: '#33bdf1',
      inactiveBackgroundColor: BlueApp.settings.brandingColor,
      inactiveTintColor: BlueApp.settings.foregroundColor,
    },
  },
);

export default Tabs;
