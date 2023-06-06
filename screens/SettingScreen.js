import {View, Text} from 'react-native';
import React from 'react';

const SettingScreen = () => {
  return (
    <View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: '20%',
        }}>
        SettingScreen
      </Text>
    </View>
  );
};

export default SettingScreen;
