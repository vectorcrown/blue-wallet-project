import React, { useEffect, useState } from 'react';
import { ScrollView, View, Switch, TouchableOpacity } from 'react-native';
import {
  BlueText,
  BlueNavigationStyle,
  BlueCard,
  BlueLoading,
  SafeBlueArea,
  BlueHeaderDefaultSub,
  BlueListItem,
} from '../../BlueComponents';
import AsyncStorage from '@react-native-community/async-storage';
import { AppStorage } from '../../class';
import { useNavigation } from 'react-navigation-hooks';
const BlueApp = require('../../BlueApp');
const loc = require('../../loc');

const Settings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [advancedModeEnabled, setAdvancedModeEnabled] = useState(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      setAdvancedModeEnabled(!!(await AsyncStorage.getItem(AppStorage.ADVANCED_MODE_ENABLED)));
      setIsLoading(false);
    })();
  });

  const onAdvancedModeSwitch = async value => {
    if (value) {
      await AsyncStorage.setItem(AppStorage.ADVANCED_MODE_ENABLED, '1');
    } else {
      await AsyncStorage.removeItem(AppStorage.ADVANCED_MODE_ENABLED);
    }
    setAdvancedModeEnabled(value);
  };

  const onShowAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  return isLoading ? (
    <BlueLoading />
  ) : (
    <SafeBlueArea forceInset={{ horizontal: 'always' }} style={{ flex: 1 }}>
      <BlueHeaderDefaultSub leftText={loc.settings.header} rightComponent={null} />
      <ScrollView>
        {BlueApp.getWallets().length > 1 && (
          <BlueListItem component={TouchableOpacity} onPress={() => navigate('DefaultView')} title="On Launch" />
        )}
        <BlueListItem title="Security" onPress={() => navigate('EncryptStorage')} component={TouchableOpacity} />
        <BlueListItem title={loc.settings.lightning_settings} component={TouchableOpacity} onPress={() => navigate('LightningSettings')} />
        <BlueListItem title={loc.settings.language} component={TouchableOpacity} onPress={() => navigate('Language')} />
        <BlueListItem title={loc.settings.currency} component={TouchableOpacity} onPress={() => navigate('Currency')} />
        <BlueListItem title={'Electrum server'} component={TouchableOpacity} onPress={() => navigate('ElectrumSettings')} />
        <BlueListItem title={loc.settings.advanced_options} component={TouchableOpacity} onPress={onShowAdvancedOptions} />
        {showAdvancedOptions && (
          <BlueCard>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <BlueText>{loc.settings.enable_advanced_mode}</BlueText>
              <Switch value={advancedModeEnabled} onValueChange={onAdvancedModeSwitch} />
            </View>
          </BlueCard>
        )}

        <BlueListItem title={loc.settings.about} component={TouchableOpacity} onPress={() => navigate('About')} />
      </ScrollView>
    </SafeBlueArea>
  );
};
Settings.navigationOptions = {
  ...BlueNavigationStyle,
};
export default Settings;
